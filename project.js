// 맨 위로 버튼
const scrollTopBtn = document.getElementById('scrollTopBtn')
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none'
  })
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// 박스 클릭 시 URL 이동 (Enter 키 포함)
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

// 팝업 전역 요소
const globalPopup = document.getElementById('globalPopup')
const globalPopupContent = document.getElementById('globalPopupContent')

// 상세보기 버튼 클릭 시 해당 박스의 팝업 내용을 전역 팝업에 복사
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

// 팝업 닫기 버튼
document
  .querySelector('#globalPopup .gallery-popup-close')
  .addEventListener('click', (e) => {
    e.stopPropagation()
    globalPopup.classList.remove('active')
  })

// ESC로 팝업 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    globalPopup.classList.remove('active')
    // 이미지 팝업 닫기(아래에서 정의)
    const imagePopup = document.getElementById('imagePopup')
    if (imagePopup) imagePopup.classList.remove('active')
  }
})

// 팝업 외부 클릭 시 닫기
globalPopup.addEventListener('click', (e) => {
  if (e.target === globalPopup) {
    globalPopup.classList.remove('active')
  }
})

// 팝업 내 이미지 클릭 시 확대
const popupImg = document.getElementById('popupImg')
const imagePopup = document.getElementById('imagePopup')
document.addEventListener('click', function (e) {
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
