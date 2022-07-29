const logForm = document.querySelector('.login__form');

logForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const error = document.querySelector('.login__error');

  const responce = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });

  const result = await responce.text();
  if (JSON.parse(result).login) {
    window.location.replace('/home');
  } else {
    error.innerHTML = '<p>Такой пользователь не существует =( </p>';
  }
});
