import { CustomValidation } from './../../../helpers/validation/validation';

export type IInputForm = (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & {
  max?: string;
  min?: string;
  step?: string;
}

interface Data {
  name: string;
  value: string | Blob;
}
export type IInputData = Data | Data[];

export abstract class Input<T extends IInputForm>{
  protected input: T;
  protected errorNode: Element;
  protected customValidation = new CustomValidation(); 

  public constructor(element: T) {
    this.input = element;
    this.errorNode = this.input.parentNode.querySelector('.error');

    this.input.addEventListener('invalid', (e) => {
      this.check();
      e.preventDefault();
    });

    this.input.addEventListener('change', () => {
      this.check();
    })
    return this;
  }

  protected check() {
    this.input.setCustomValidity(
      this.customValidation
        .checkValidity(this.input)
        .getInvaliditiesString()
    );
    this.setError();
  }

  protected setError() {
    if (this.errorNode) {
      this.errorNode.innerHTML = this.customValidation.getInvaliditiesForHTML()
    } else {
      this.errorNode = document.createElement('div');
      this.errorNode.classList.add('error');
      this.errorNode.innerHTML = this.customValidation.getInvaliditiesForHTML();
      this.input.insertAdjacentElement('afterend', this.errorNode);
    }
  }

  public clear() {
    this.input.value = '';
    return this;
  }

  protected isEmptyListener() {
    this.input.addEventListener('change', () => {
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
}