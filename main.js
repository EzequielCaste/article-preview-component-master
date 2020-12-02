const shareBtn = document.querySelector('.share-btn');
const avatarImg = document.querySelector('#avatar')
const nameDiv = document.querySelector('.name')
const shareContent = document.querySelector('.share-content')

shareBtn.addEventListener('click', () => {

 avatarImg.classList.toggle('hide')
 nameDiv.classList.toggle('hide')
 shareContent.classList.toggle('hide')
})