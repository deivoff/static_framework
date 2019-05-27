import { CustomValidation } from './../../../helpers/validation/validation';

export type IInputForm = (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & {
  max?: string;
  min?: string;
  step?: string;
}

type Data = {
  name: string;
  value: string | Blob;
}
export type IInputData = Data | Data[];

export abstract class Input<T extends IInputForm>{
  protected input: T;
  protected customValidation = new CustomValidation(); 

  constructor(element: T) {
    this.input = element;
    return this;
  }

  public clear() {
    this.input.value = '';
    return this;
  }

  protected isEmptyListener() {
    this.input.addEventListener('change', (e) => {
      this.input.classList.remove('error');

      if (this.input.value !== '') {
        this.input.classList.add('active');
      } else {
        this.input.classList.remove('active');
      }

      return this;
    })
  }

  public disabled() {
    this.input.setAttribute('disabled', 'disabled');

    return this;
  }

  public enabled() {
    this.input.removeAttribute('disabled');

    return this;
  }

  public getData(): IInputData {
    return {
      name: this.input.getAttribute('name'), 
      value: this.input.value
    };
  }

  public error() {
    this.input.classList.add('error');
  }

  public check() {
    console.log(this);
    this.customValidation.checkValidity(this.input);
    console.log(this.customValidation.invalidities);
    return this;
  }
}