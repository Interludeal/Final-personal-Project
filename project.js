const scrollTopBtn = document.getElementById('scrollTopBtn')
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none'
  })
  scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
}
document.querySelectorAll('.gallery-row-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-desc-btn')) return
    const url = item.getAttribute('data-url')
    if (url) window.open(url, '_blank')
  })
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const url = item.getAttribute('data-url')
      if (url) window.open(url, '_blank')
    }
  })
})
document.querySelectorAll('.gallery-main-item img').forEach((img) => {
  img.addEventListener('click', (e) => {
    window.open('https://final-team-project-wheat.vercel.app/', '_blank')
    e.stopPropagation()
  })
})
const globalPopup = document.getElementById('globalPopup')
const globalPopupContent = document.getElementById('globalPopupContent')
document.querySelectorAll('.toggle-desc-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const item = btn.closest('.gallery-main-item, .gallery-row-item')
    const popupContent = item.querySelector('.gallery-popup-content')
    if (popupContent) {
      globalPopupContent.innerHTML = popupContent.innerHTML
      globalPopup.classList.add('active')
      globalPopup.focus()
    }
  })
})
document
  .querySelector('#globalPopup .gallery-popup-close')
  .addEventListener('click', (e) => {
    e.stopPropagation()
    globalPopup.classList.remove('active')
  })
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    globalPopup.classList.remove('active')
    const imagePopup = document.getElementById('imagePopup')
    if (imagePopup) imagePopup.classList.remove('active')
  }
})
globalPopup.addEventListener('click', (e) => {
  if (e.target === globalPopup) globalPopup.classList.remove('active')
})
const popupImg = document.getElementById('popupImg')
const imagePopup = document.getElementById('imagePopup')
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popupable')) {
    if (popupImg && imagePopup) {
      popupImg.src = e.target.src
      imagePopup.classList.add('active')
    }
  }
})
if (imagePopup) {
  imagePopup.addEventListener('click', () => {
    imagePopup.classList.remove('active')
  })
}
