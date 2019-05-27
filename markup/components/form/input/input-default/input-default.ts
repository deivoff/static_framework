import { Input } from '../input';

export default class InputDefault extends Input<HTMLInputElement> {
  constructor(element: HTMLInputElement){
    super(element);
    this.isEmptyListener();
  }
}