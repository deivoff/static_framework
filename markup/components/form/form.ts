import axios from 'axios';
import { Input, IInputForm, } from "./input/input";
import { InputMask } from "./input/input-mask/input-mask";
import { InputFile } from "./input/input-file/input-file";
import { InputDefault } from "./input/input-default/input-default";
import { InputSelect } from "./input/input-select/input-select";
import { addTokenOnForm } from "./grecaptcha-v3/grecaptcha-v3";

export class Form {
  private form: HTMLFormElement;
  private inputs: Input<IInputForm>[];

  public static init() {
    const className = 'cf-form';

    const elements = Array.from(document.getElementsByClassName(className));
    elements.map((elem: HTMLFormElement) => {
      new Form(elem);
    })
  }
  
  constructor(element: HTMLFormElement) {
    this.form = element;
    this.inputs = this.inputsCreate();
    this.form.addEventListener('submit', (e) => {
      this.formSubmit();
      e.preventDefault();
    })
    return this;
  }

  public formSubmit() {
    this.sendForm(
      this.form.action,
      this.createFormData(),
      addTokenOnForm(this.form)
    )
  }

  private sendForm(url: string, data: FormData, middleCheck?: boolean ) {
    if (middleCheck === undefined) {
      middleCheck = true;
    }

    if (middleCheck) {
      this.formDisabled();
      axios({
        method: 'post',
        url,
        data,
      }).then((res) => {
        console.log(res);
      })
    }
  }

  public formDisabled() {
    this.inputs.forEach(block => block.disabled());
    return this;
  }

  public formEnabled() {
    this.inputs.forEach(block => block.enabled());
    return this;
  }

  private createFormData() {
    const formData = new FormData();
    this.inputs.map((block) => {
      let obj = block.getData();
      if (obj instanceof Array) {
        obj.forEach((elem) => {
          formData.append(elem.name, elem.value)
        })
      } else {
        formData.append(obj.name, obj.value);
      }
    });

    return formData;
  }

  private inputsCreate() {
    const elements = Array.from(this.form.querySelectorAll('.cf-input'));
    const elemArr = elements.map((elem: IInputForm ) => {
        if (elem instanceof HTMLInputElement)
          switch (elem.type) {
            case 'tel':
              return new InputMask(elem);
            case 'file':
              return new InputFile(elem);
            default:
              return new InputDefault(elem);
          }
        else if (elem instanceof HTMLSelectElement)
          return new InputSelect(elem);
        else if (elem instanceof HTMLTextAreaElement)
            return;
        return;
    });
    return elemArr;
  }
}