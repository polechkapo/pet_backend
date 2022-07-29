const form = document.querySelector('.cabinet__form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const login = event.target.login.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const div = document.querySelector('.status');
  const { id } = form;
  const result = await fetch(`/api/cabinet/${form.id}/edit`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name, login, email, password, id,
    }),
  });

  if (result.status === 200) {
    div.innerHTML = '<p>Все окей, все поменяли!</p>';
  } else {
    div.innerHTML = '<p>Что-то пошло не так =(</p>';
  }
});
