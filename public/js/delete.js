const list = document.querySelector('.cards__lists');

list.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteButton')) {
    event.preventDefault();
    const result = await fetch(`/api/tweet/${event.target.id}`, {
      method: 'DELETE',
    });
    const answer = await result.json();
    if (answer.status === 'ok') {
      const cardLi = document.querySelector(`.card__item-${event.target.id}`);
      cardLi.remove();
    }
  }
});
