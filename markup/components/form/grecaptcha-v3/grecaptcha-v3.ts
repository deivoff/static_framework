export function addTokenOnForm(form: HTMLFormElement): boolean {
  const token = sessionStorage.getItem('captcha');
  if (token) {
    let tokenInput: HTMLInputElement = form.querySelector('input[name="token"]');

    if (!tokenInput) {
      tokenInput = document.createElement('input')
      tokenInput.type = 'hidden';
      tokenInput.name = 'token';
      form.appendChild(tokenInput);
    }

    tokenInput.value = token;
    return true;
  } else {
    console.error('Or maybe you\'re a robot?');
    return false;
  }
}