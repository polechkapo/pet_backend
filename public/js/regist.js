const regForm = document.querySelector('.reg__form');

regForm.addEventListener('submit', async (event) => { // регистрация, отлавливаем форму
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const passwordCheck = event.target.passwordCheck.value;
  const error = document.querySelector('.reg__error');

  if (password === passwordCheck) {
    const responce = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password,
      }),
    });

    const result = await responce.text();
    if (JSON.parse(result)) {
      window.location.replace('/home');
    } else {
      error.innerHTML = '<p>Такой пользователь уже существует</p>';
    }
  } else {
    error.innerHTML = '<p>Неверный логин или пароль =(</p>';
  }
});
