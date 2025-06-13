const profileImgs = [
  'image/Home_profile1.png',
  'image/Home_profile2.png',
  'image/Home_profile3.png',
  'image/Home_profile4.png',
]
let profileIdx = 0
const profileImgEl = document.getElementById('profileImg')
const profileImgExtra = document.getElementById('profileImgExtra')
const popup = document.getElementById('imagePopup')
const popupImg = document.getElementById('popupImg')

function showProfileImg(idx) {
  profileImgEl.style.opacity = 0
  setTimeout(() => {
    profileImgEl.src = profileImgs[idx]
    profileImgEl.style.opacity = 1
  }, 120)
}
profileImgExtra.onclick = () =>
  showProfileImg((profileIdx = (profileIdx + 1) % profileImgs.length))
profileImgEl.onclick = () => {
  popupImg.src = profileImgEl.src
  popup.classList.add('active')
}
popup.onclick = () => popup.classList.remove('active')
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') popup.classList.remove('active')
})
showProfileImg(0)
