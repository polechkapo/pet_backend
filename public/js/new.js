document.newForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const picture = event.target.inputPhoto.value;
  const message = event.target.inputInfo.value;
  console.log(picture, message);
  const likes = 0;
  const result = await fetch('/api/tweet/new', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      picture, message, likes,
    }),
  });

  if (result.status === 200) {
    window.location.replace('/home');
  }
});
