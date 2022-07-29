const form = document.querySelector('.editForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const picture = event.target.inputPhoto.value;
  const message = event.target.inputInfo.value;
  const { id } = form;
  const result = await fetch(`/api/tweet/${form.id}/edit`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      picture, message, id,
    }),
  });

  if (result.status === 200) {
    window.location.replace('/home');
  }
});
