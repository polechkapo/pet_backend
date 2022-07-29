/* eslint-disable no-param-reassign */
const cardList = document.querySelector('.cards__lists');

cardList.addEventListener('click', async (event) => {
  if (event.target.classList.contains('like')) {
    event.preventDefault();
    const { id } = event.target;
    const result = await fetch('/like', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const answer = await result.text();

    if (result.status === 200) {
      const counter = document.querySelector(`.desc-${event.target.id}`);
      counter.textContent = answer;
    }
  }
});
