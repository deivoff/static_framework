import { Input } from '../input';

export class InputDefault extends Input<HTMLInputElement> {
  public constructor(element: HTMLInputElement){
    super(element);
    this.isEmptyListener();
  }
}