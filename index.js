import Reveal from './node_modules/reveal.js/js/reveal'

Reveal.initialize({
  hash: true,
  progress: false
})

function openNav () {
  document.getElementById('navigation').style.height = '100%'
}

function closeNav () {
  document.getElementById('navigation').style.height = '0%'
}
