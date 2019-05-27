import { Input, IInputData } from '../input';
import Choices from 'choices.js';

export default class InputSelect extends Input<HTMLSelectElement> {
  constructor(element: HTMLSelectElement){
    super(element);
    const choises = new Choices(element);
    this.isEmptyListener();
    console.log(choises);
  }

  getData(): IInputData {
    let el = this.input;
    return {
      name: el.getAttribute('name'), 
      value: el.options[el.selectedIndex].value
    }
  }
}