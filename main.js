const shareBtn = document.querySelector('.share-links');
const shareDiv = document.querySelector('.share-content');

shareBtn.addEventListener('click', () => {
  shareDiv.classList.toggle('hide')
  shareDiv.setAttribute('opacity', '1');
  shareDiv.setAttribute('display', 'inline-block');
})