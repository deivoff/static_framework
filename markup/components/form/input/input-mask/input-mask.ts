import { Input } from '../input';
import IMask from 'imask';

export class InputMask extends Input<HTMLInputElement> {
  public mask: any;

  public constructor(element: HTMLInputElement){
    super(element);
    this.mask = this.activateMask();
    this.isEmptyListener();
  }

  private activateMask() {
    let mask = '';
    let pattern = '';
    const type = this.input.type || this.input.dataset.type;
    switch (type) {
      case 'tel': {
        mask = '+{7}(000)000-00-00';
        pattern = '+{7}(000)000-00-00';
        return IMask(
          this.input,
          {
            mask: mask,
            pattern: pattern,
          });
      }
      default: {
        return;
      }
    }
  }

  protected isEmptyListener() {
    if (!this.mask.masked.lazy) {
      this.input.classList.add('active');
    }

    this.mask.on('accept', () => {
      this.input.classList.remove('error');
      switch (this.mask.value) {
        case '+7(': {
          this.mask.value = '';
          break;
        }
        case '': {
          this.input.classList.remove('active');
          break;
        }
        default: {
          this.input.classList.add('active');
          break;
        }
      }
    });
    return this;
  }
}