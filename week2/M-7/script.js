const WHITES = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'e']
const BLACKS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playAudio(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITES.indexOf(key)
  const blackKeyIndex = BLACKS.indexOf(key)

  if (whiteKeyIndex > -1) playAudio(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playAudio(blackKeys[blackKeyIndex])
})

function playAudio(key) {
  const Audio = document.getElementById(key.dataset.note)
  console.log(Audio)
  Audio.currentTime = 0
  Audio.play()
  // key.classList.add('active')
  // noteAudio.addEventListener('ended', () => {
  //   key.classList.remove('active')
  // })
}