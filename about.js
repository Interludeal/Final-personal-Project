const scrollTopBtn = document.getElementById('scrollTopBtn')
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 180 ? 'flex' : 'none'
})
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const photoPopup = document.getElementById('photoPopup')
const popupImg = document.getElementById('popupImg')
const popupBg = document.querySelector('.popup-bg')
function openPopup(src) {
  popupImg.src = src
  photoPopup.classList.add('active')
}
function closePopup() {
  photoPopup.classList.remove('active')
  popupImg.src = ''
}
if (photoPopup && popupBg && popupImg) {
  popupBg.onclick = closePopup
  popupImg.onclick = closePopup
  window.addEventListener('keydown', (e) => {
    if (photoPopup.classList.contains('active') && e.key === 'Escape')
      closePopup()
  })
}
document.body.addEventListener('click', (e) => {
  if (e.target.matches('#profilePhoto, .slide-img, .solve-img'))
    openPopup(e.target.src)
})

const projects = [
  {
    img: 'image/web_1.png',
    title: 'webhacking.kr 문제 풀이',
    desc: 'HTML과 JavaScript의 기본을 익히고, <br> 각 태그의 역할을 이해하며, <br> DOM 조작(innerHTML, style)과 location.href 등을 활용한 문제 풀이를 <br> 통해 비정상적인 웹 구조를 분석하고 <br> 해결하는 능력을 향상시켰습니다.',
  },
  {
    img: 'image/web_2.png',
    title: 'HTML Injection',
    desc: 'Reflected와 Stored 형태의 <br> HTML Injection 문제를 풀이하며, <br> 먼저 Injection에 대한 개념을 확실히 <br> 이해하였고, 반복적인 문자열 패턴 등의 <br> 단서를 활용해 연습과 테스트를 성실히 <br> 수행하여 성공적으로 해결했습니다.',
  },
  {
    img: 'image/web_3.png',
    title: 'Web CTF 1',
    desc: '문제 풀이를 기반으로 문자열의 개념과 <br> 인코딩/디코딩 (ASCII,Base64,치환암호) <br> 을 학습할 수 있는 계기가 되었습니다. <br> 이후 React와 Tailwind CSS로 <br> 깔끔한 UI 구현을 위해 노력했습니다.',
  },
  {
    img: 'image/web_4.png',
    title: 'Web CTF 2',
    desc: '문제 풀이를 기반으로 문자열의 개념과 <br> 인코딩/디코딩 (ASCII,Base64,치환암호) <br> 을 학습할 수 있는 계기가 되었습니다. <br> 이후 React와 Tailwind CSS로 <br> 깔끔한 UI 구현을 위해 노력했습니다.',
  },
  {
    img: 'image/web_5.png',
    title: 'URL Redirection',
    desc: 'Open Redirection 취약점이 피싱 공격과 <br> 어떻게 연결되는지 공부하였습니다. <br> HTTP 상태 코드의 역할과 반응, <br> SEO 조작의 위험성을 알고, <br> Flask 기반으로 공격과 방어 실습을 <br> 진행하며 웹 보안의 핵심을 익혔습니다.',
  },
  {
    img: 'image/web_6.png',
    title: 'HTTP Desync Attack',
    desc: 'POST, GET 요청을 통한 공격 사례를 <br> 학습했습니다. 사유는 파싱 불일치이며, <br> Nginx 프록시를 이용한 API 인증 우회와 <br> Cloudflare CDN을 활용한 취약점 작동을 <br> 이해하고, flask 기반 서버 보호 로직과 <br> 실행 실습으로 웹 보안 방어 기술을 익혔습니다.',
  },
  {
    img: 'image/web_7.png',
    title: 'Shadow API',
    desc: '기본적인 API부터 공부했으며, <br> OWASP ZAP, Burp Suite와 같은 도구를 <br> 활용하여 Node.js 기반 서버 실행과 <br> 탈취 및 로그 기록을 통해 <br>모니터링과 같은 방어기법을 이해했습니다.',
  },
  {
    img: 'image/notweb_1.png',
    title: 'Fire wall / Spoofing',
    desc: '방화벽으로 Dos 공격을 막고, <br> 패킷 스니핑과 스푸핑의 위험에 대하여 <br> 공부했습니다. HTTP, HTTPS, SSH 포트의 <br> 역할과 VPN으로 네트워크를 <br> 보호하는 방법을 익혔습니다.',
  },
  {
    img: 'image/notweb_2.png',
    title: 'LCA 알고리즘',
    desc: '트리 구조에서 두 노드의 최근 공통 <br> 조상(LCA)을 찾는 알고리즘은 <br> 이진 리프팅을 사용해 쿼리당 O(log N) <br> 으로 효율적으로 계산됩니다. <br> 이는 네트워크 각종 분석에 활용됩니다.',
  },
  {
    img: 'image/notweb_3.png',
    title: 'Abstract Data Type',
    desc: 'push, pop연산을 통해 자료를 관리하는 <br> LIFO 구조의 스택을 이해하고, <br> FIFO 구조의 큐를 이해했습니다. <br> 실제 배열과 연결 리스트를 사용해봤으며, 이는 시스템 설계에 <br> 용이합니다.',
  },
  {
    img: 'image/notweb_4.png',
    title: 'Toy Project',
    desc: '플레이어 관리, 턴 기반 진행, 매트릭스 <br> 기반 게임 보드를 포함하여 <br> 게임 개발을 하였습니다. <br> 평소보단 비교적 장기간동안 진행하였으며, Python의 활용능력이 <br> 대폭 상승하는 계기가 되었습니다.',
  },
]
const sliderTrack = document.getElementById('sliderTrack')
const sliderMainBtn = document.getElementById('sliderMainBtn')
let currentSlide = 0,
  isAnimating = false
function renderSlides() {
  if (!sliderTrack) return
  sliderTrack.innerHTML = projects
    .map(
      (p, i) => `
    <div class="slide${
      i === currentSlide ? ' active' : ''
    }" style="transform:translateX(${(i - currentSlide) * 100}%);">
      <img src="${p.img}" alt="${
        p.title
      }" class="slide-img" data-slide-idx="${i}" />
      <div class="slide-desc">
        <div class="slide-title">${p.title}</div>
        <div>${p.desc}</div>
      </div>
    </div>
  `
    )
    .join('')
}
function animateSlideChange(nextIdx) {
  if (isAnimating || nextIdx === currentSlide) return
  isAnimating = true
  const slides = sliderTrack.querySelectorAll('.slide')
  const prevImg = slides[currentSlide].querySelector('.slide-img')
  const nextImg = slides[nextIdx].querySelector('.slide-img')
  prevImg.classList.remove('anim-in')
  prevImg.classList.add('anim-out')
  setTimeout(() => {
    slides.forEach((slide, i) => {
      slide.style.transition = 'transform 0.45s cubic-bezier(.7,1.6,.5,1)'
      slide.style.transform = `translateX(${(i - nextIdx) * 100}%)`
      slide.classList.toggle('active', i === nextIdx)
    })
    prevImg.classList.remove('anim-out')
    nextImg.classList.add('anim-in')
    setTimeout(() => {
      nextImg.classList.remove('anim-in')
      slides.forEach((slide) => (slide.style.transition = ''))
      currentSlide = nextIdx
      isAnimating = false
    }, 220)
  }, 120)
}
sliderMainBtn?.addEventListener('click', () => {
  if (!isAnimating) animateSlideChange((currentSlide + 1) % projects.length)
})
sliderTrack?.addEventListener('click', (e) => {
  if (!e.target.classList.contains('slide-img') && !isAnimating) {
    animateSlideChange((currentSlide + 1) % projects.length)
  }
})
renderSlides()

const goalQuotes = [
  'Act as if you have already achieved',
  'The best way to get started is to quit talking and begin doing.',
  'Success is not in what you have, but who you are.',
  'Don’t watch the clock; do what it does. Keep going.',
  'Great things never come from comfort zones.',
  'Push yourself, because no one else is going to do it for you.',
  'Dream it. Wish it. Do it.',
  'Stay hungry. Stay foolish.',
  'Believe you can and you’re halfway there.',
  'Your limitation—it’s only your imagination.',
]
const goalEm = document.querySelector('.resume-section.goal em')
goalEm?.addEventListener('click', () => {
  let current = goalEm.textContent.replace(/“|”/g, '').trim()
  let next
  do {
    next = goalQuotes[Math.floor(Math.random() * goalQuotes.length)]
  } while (next === current)
  goalEm.textContent = `“${next}”`
})
