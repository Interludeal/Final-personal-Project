const scrollTopBtn = document.getElementById('scrollTopBtn')
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none'
})
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
const toggles = document.querySelectorAll('.team-toggle')
const details = document.querySelectorAll('.team-detail')
toggles.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const detail = details[idx]
    const isOpen = detail.style.display === 'block'
    details.forEach((el, i) => {
      el.style.display = 'none'
      toggles[i].textContent = '세부 정보 보기'
    })
    if (!isOpen) {
      detail.style.display = 'block'
      btn.textContent = '닫기'
    }
  })
})
