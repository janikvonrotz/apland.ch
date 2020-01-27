import Reveal from './node_modules/reveal.js/js/reveal'

Reveal.initialize({
  hash: true,
  progress: false
})

document.getElementById('open-nav').onclick = () => {
  document.getElementById('navigation').style.height = '100%'
}

document.getElementById('navigation').onclick = () => {
  document.getElementById('navigation').style.height = '0%'
}
