import { Input, IInputData } from '../input';

export default class InputFile extends Input<HTMLInputElement>{
  private file: any;
  constructor(element: HTMLInputElement){
    super(element);
    this
      .activateFile()
      .isEmptyListener();
  }

  activateFile() {
    let defaultText = this.input.dataset.defaultValue || 'Файл в формате .doc, .pdf, .txt до 10MB';

    this.input.dataset.currentValue = defaultText;
    this.input.addEventListener('change', (e) => {
      if (this.input.files[0]) {
        let nameFile = this.input.files[0].name;
        this.input.dataset.currentValue = nameFile;
      } else {
        this.input.dataset.currentValue = defaultText;
      }
    });

    return this;
  }

  getData(): IInputData  {
    let el = this.input;
    return [...Array.from(el.files).map((item) => {
      return {
        name: el.getAttribute('name'), 
        value: item
      }
    })]
  }
}