import { createUsers, delUser } from './fetchUsers';
import { addTasks } from '../tasks/addTasks';
import { initDogs } from '../dogs';

export const addListeners = (): void => {
  const headerBtn0 = document.querySelector<HTMLButtonElement>('#nav0');
  headerBtn0.addEventListener('click', ()=> {
    addTasks();
  })

  const headerBtn1 = document.querySelector<HTMLButtonElement>('#nav1');
  headerBtn1.addEventListener('click', () => {
    createUsers();
  })

  const headerBtn2 = document.querySelector<HTMLButtonElement>('#nav2');
  headerBtn2.addEventListener('click', () => {
    initDogs();
  })

  const rootDiv = document.querySelector<HTMLDivElement>('#root');
  rootDiv.addEventListener('click', (e)=> {
    if(e.target instanceof HTMLButtonElement) {
      const btn = e.target;
      if (btn.classList.contains('user__btn')) {
        const id = +btn.closest('.user').id.slice(5);
        delUser(id);
      }
    }
  })
}
