export class Layout {
  #root: HTMLDivElement | null = null;
  constructor(root: HTMLDivElement) {
    this.#root = root;

    this.renderContent = this.renderContent.bind(this);
    this.clearContent = this.clearContent.bind(this);
  }

  renderContent(content: string | HTMLElement, target?: string|HTMLDivElement) {

    let targetToRender: HTMLDivElement;

    if (target instanceof HTMLDivElement) {
      targetToRender = target;
    } else if (target) {
      targetToRender = document.querySelector(target) as HTMLDivElement;
    } else {
      targetToRender = this.#root as HTMLDivElement;
    }

    if (typeof content === 'string') {
      targetToRender.insertAdjacentHTML('beforeend', content);
      return;
    }

    targetToRender.insertAdjacentElement('beforeend',content);

  }

  clearContent(target?: HTMLElement | string) {
    if (!target && !this.#root) {
      return;
    }
    if (!target) {
      target = this.#root as HTMLElement
    }
    if (typeof target === 'string') {
      (document.querySelector(target) as HTMLDivElement).innerHTML = '';
      return;
    }
    target.innerHTML = '';
  }
}
