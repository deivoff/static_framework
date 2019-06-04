import { ITemplateClass } from "../_template/_template";

interface IModal extends ITemplateClass{
}

export class Modal implements IModal{
  public props: object;
  public elem: Element;
  private _buttonClose: Element;

  public static init(): void {
    const className = 'cf-modal';
    const elements = document.getElementsByClassName(className);
    const elemArr = Array.from(elements);
    elemArr.map((elem: Element) => {
      new Modal(elem);
    })
  }

  public constructor(element: Element) {
    this.elem = element;
    this.elem.classList.add('hidden');
    this.buttonClose = this.elem.getElementsByClassName('close')[0];
  }

  public close() {
    document.body.classList.remove('scroll-hidden');
    this.elem.classList.add('hidden');
  }

  public open() {
    document.body.classList.add('scroll-hidden');
    this.elem.classList.remove('hidden');
  }

  private set buttonClose(elem: Element) {
    if (elem) {
      this._buttonClose = elem;
    } else {
      const button = this.elem.appendChild(document.createElement('button'));
      button.className = 'close';
      this._buttonClose = button;
    }
    this._buttonClose.addEventListener('click', (event) => {
      event.preventDefault();
      this.close();
    });
  }

  private get buttonClose() {
    return this._buttonClose;
  }
}