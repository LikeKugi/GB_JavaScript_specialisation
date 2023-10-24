import { Layout } from '../Layout/Layout';
import { fetchData } from '../services/fetchData';
import { IClass } from '../types/IClass';
import { headerLayout } from '../Layout/headerLayout';
import { scheduleBoxLayout } from '../Layout/scheduleBoxLayout';
import { createScheduleItemLayout } from '../Layout/createScheduleItemLayout';

export class App {
  #layout: Layout;
  #root;
  #classes: IClass[] = [];
  #acceptedClasses: Set<number> = new Set();
  #btnContent = {
    'in': 'Sign out',
    'out': 'Sign Up for Class',
  }
  constructor(root: HTMLDivElement) {
    this.#root = root;
    this.#layout = new Layout(this.#root);

    this.init = this.init.bind(this);
    this.fetchClassesData = this.fetchClassesData.bind(this);
    this.makeSchedule = this.makeSchedule.bind(this);
    this.rootListener = this.rootListener.bind(this);
    this.makeButtonsState = this.makeButtonsState.bind(this);

    this.#root.addEventListener('click', this.rootListener);
  }
  init() {
    this.fetchClassesData();
    this.#layout.clearContent();
    const baseLayout = headerLayout + scheduleBoxLayout;
    this.#layout.renderContent(baseLayout);
  }

  fetchClassesData() {
    fetchData().then(arr => {
      this.#classes = arr;
      this.#classes.forEach(el => el.current_users = Math.ceil(Math.random() * el.max_users));
      this.makeSchedule();
    }).catch(e => console.error(e));
  }

  makeSchedule() {
    const schedule = this.#classes.map(el => createScheduleItemLayout(el)).join('')
    this.#layout.clearContent('#schedule');
    this.#layout.renderContent(schedule, '#schedule');
    this.makeButtonsState();
  }

  rootListener(e: MouseEvent) {
    if (!(e.target instanceof HTMLButtonElement) || e.target.disabled)return;
    const targetBtn = e.target;
    const targetDiv = targetBtn.closest('.schedule__item');
    if (!targetDiv) return;

    const targetId = +targetDiv.id.slice(4);

    const isAccepted = this.#acceptedClasses.has(targetId);

    if (isAccepted) {
      this.#acceptedClasses.delete(targetId);
      this.#classes.filter(el => el.id === targetId)[0].current_users -= 1;
    } else {
      this.#acceptedClasses.add(targetId);
      this.#classes.filter(el => el.id === targetId)[0].current_users += 1;
    }

    this.makeSchedule();
  }

  makeButtonsState() {
    const scheduleBox = document.querySelector('#schedule');
    if (!scheduleBox) return;
    this.#classes.forEach(el => {
      const id = el.id;
      const elBox = scheduleBox.querySelector(`#key-${id}`) as HTMLDivElement;
      const btn = elBox.querySelector('button') as HTMLButtonElement;
      const isAccepted = this.#acceptedClasses.has(id);

      if (el.current_users === el.max_users && !isAccepted) {
        btn.disabled = true;
        return;
      }
      btn.disabled = false;

      btn.textContent = this.#btnContent[isAccepted ? 'in' : 'out'];
    })
  }
}
