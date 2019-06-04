import { Input, IInputData } from '../input';

export class InputFile extends Input<HTMLInputElement>{
  public constructor(element: HTMLInputElement){
    super(element);
    this
      .activateFile()
      .isEmptyListener();
  }

  private activateFile() {
    let defaultText = this.input.dataset.defaultValue || 'Файл в формате .doc, .pdf, .txt до 10MB';

    this.input.dataset.currentValue = defaultText;
    this.input.addEventListener('change', () => {
      if (this.input.files[0]) {
        let nameFile = this.input.files[0].name;
        this.input.dataset.currentValue = nameFile;
      } else {
        this.input.dataset.currentValue = defaultText;
      }
    });

    return this;
  }

  public getData(): IInputData  {
    let el = this.input;
    return [...Array.from(el.files).map((item: File) => {
      return {
        name: el.getAttribute('name'), 
        value: item
      }
    })]
  }
}