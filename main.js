// 프로필 이미지 슬라이드 및 팝업
const profileImgs = [
  'image/profile1.png',
  'image/profile2.png',
  'image/profile3.png',
  'image/profile4.png',
]
let profileIdx = 0
const profileImgEl = document.getElementById('profileImg')
const profileImgExtra = document.getElementById('profileImgExtra')
const popup = document.getElementById('imagePopup')
const popupImg = document.getElementById('popupImg')

// 이미지 슬라이드
function showProfileImg(idx) {
  profileImgEl.style.opacity = 0
  setTimeout(() => {
    profileImgEl.src = profileImgs[idx]
    profileImgEl.style.opacity = 1
  }, 120)
}
profileImgExtra.addEventListener('click', () => {
  profileIdx = (profileIdx + 1) % profileImgs.length
  showProfileImg(profileIdx)
})

// 팝업 기능
profileImgEl.addEventListener('click', () => {
  popupImg.src = profileImgEl.src
  popup.classList.add('active')
})
popup.addEventListener('click', () => {
  popup.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') popup.classList.remove('active')
})

// 초기 이미지
showProfileImg(0)
