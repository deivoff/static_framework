import { IInputForm } from '../../components/form/input/input';

export class CustomValidation{ 
  private _invalidities: Array<string> = []

  set invalidities(value: string) {
    this._invalidities.push(value);
  }

  get invalidities() {
    return this._invalidities.join('/n');
  }

  public checkValidity(elem: IInputForm) {
    let validity = elem.validity;

    switch (true) {
      case validity.patternMismatch:
        this.invalidities = 'Введенное значение не соответствует требуемому';
      case validity.rangeOverflow:
        let max = elem.max
        this.invalidities = `Максимальное значение должно быть не больше ${max}`
      case validity.rangeUnderflow:
        let min = elem.min
        this.invalidities = `Минимальное значение должно быть не менее ${min}`
      case validity.stepMismatch:
        let step = elem.step
        this.invalidities = `Значение должно быть кратно ${step}`
      case validity.valueMissing:
        this.invalidities = `Поле не может быть пустым`;
      case validity.typeMismatch:
        this.invalidities = `Неправильно введены данные`;
      default:
        return;
    }
  }
}
