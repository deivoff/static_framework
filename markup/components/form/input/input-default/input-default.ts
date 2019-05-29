import { Input } from '../input';

export class InputDefault extends Input<HTMLInputElement> {
  constructor(element: HTMLInputElement){
    super(element);
    this.isEmptyListener();
  }
}