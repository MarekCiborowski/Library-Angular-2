import { AbstractControl } from '@angular/forms';

export function charValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/.test(control.value);
  return valid ? null : { invalidName: { valid: false, value: control.value } };
}