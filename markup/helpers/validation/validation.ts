import { IInputForm } from '../../components/form/input/input';

export class CustomValidation{ 
  private _invalidities: Set<string> = new Set;

  set invalidities(value: Set<string>) {
      this._invalidities = value;
  }

  get invalidities() {
    return this._invalidities;
  }

  getInvaliditiesString() {
    return Array.from(this._invalidities).join(' \n');
  }

  getInvaliditiesForHTML() {
    return Array.from(this._invalidities).join('<br>');
  }

  private invaliditiesReset() {
    this._invalidities.clear();
  }

  public checkValidity(elem: IInputForm) {
    this.invaliditiesReset();
    let validity = elem.validity;
    let flag = true;
    if (validity.patternMismatch) {
      const customError = elem.title || 'Введенное значение не соответствует требуемому.'
      this.invalidities.add(customError);
      flag = false;
    }
    if (validity.rangeOverflow) {
      let max = elem.max;
      this.invalidities.add(`Максимальное значение должно быть не больше ${max}.`);
      flag = false;
    }
    if (validity.rangeUnderflow) {
      let min = elem.min;
      this.invalidities.add(`Минимальное значение должно быть не менее ${min}.`);
      flag = false;
    }
    if (validity.stepMismatch) {
      let step = elem.step;
      this.invalidities.add(`Значение должно быть кратно ${step}.`);
      flag = false;
    }
    if (validity.valueMissing) {
      this.invalidities.add(`Поле должно быть заполнено.`);
      flag = false;
    }
    if (validity.typeMismatch) {
      let customError: string;
      switch (elem.type) {
        case 'tel':
          customError = 'Пожалуйста, введите номер телефона в необходимом формате';
          break;
        case 'email':
          customError = 'Пожалуйства, введите email в формате "email@example.com"';
          break;
        default:
          customError = 'Пожалуйства, введите требуемое значение';
          break;
      }
      this.invalidities.add(customError);
      flag = false;
    }
    return this;
  }
}
