import { ITemplateClass } from "../_template/_template";
import { Modal } from "../index";

interface IHeader extends ITemplateClass {
  props: object;
}

export class Header implements IHeader {
  public props: object;
  public static init(): void {
    const modal = new Modal(document.getElementsByClassName('modal')[0])
    const button = document.getElementsByClassName('header')[0]

    button.addEventListener('click', (e) => {
      e.preventDefault();
      modal.open();
    })
  }
}
