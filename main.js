const shareBtn = document.querySelectorAll('.share-btn');


console.log(shareBtn);

shareBtn.forEach(el => el.addEventListener('click', () => {


  if( window.innerWidth > 1020 ) {
    //show desktop links
    const avatarImg = document.querySelector('#avatar-desktop')
    const nameDiv = document.querySelector('.name-desktop')
    const shareContent = document.querySelector('.share-content-desktop')
    // avatarImg.classList.toggle('hide')
    // nameDiv.classList.toggle('hide')
    shareContent.classList.toggle('hide')
  } else {
    const avatarImgMobile = document.querySelector('#avatar-mobile')
    const nameDivMobile = document.querySelector('.name-mobile')
    const shareContentMobile = document.querySelector('.share-content-mobile')
    avatarImgMobile.classList.toggle('hide')
    nameDivMobile.classList.toggle('hide')
    shareContentMobile.classList.toggle('hide')
  }
})
)