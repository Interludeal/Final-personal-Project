// 맨 위로 버튼
const scrollTopBtn = document.getElementById('scrollTopBtn')
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'flex' : 'none'
})
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// 팀원 세부 정보 토글
document.querySelectorAll('.team-toggle').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling
    if (detail.style.display === 'block') {
      detail.style.display = 'none'
      btn.textContent = '세부 정보 보기'
    } else {
      // 다른 카드 detail 닫기
      document.querySelectorAll('.team-detail').forEach((el, i) => {
        if (i !== idx) {
          el.style.display = 'none'
          document.querySelectorAll('.team-toggle')[i].textContent =
            '세부 정보 보기'
        }
      })
      detail.style.display = 'block'
      btn.textContent = '닫기'
    }
  })
})
