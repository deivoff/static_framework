import { Input, IInputData } from '../input';
import Choices from 'choices.js';

export class InputSelect extends Input<HTMLSelectElement> {
  public constructor(element: HTMLSelectElement){
    const choises = new Choices(element);
    super(element);
    this.isEmptyListener();
  }

  public getData(): IInputData {
    let el = this.input;
    return {
      name: el.getAttribute('name'), 
      value: el.options[el.selectedIndex].value
    }
  }
}