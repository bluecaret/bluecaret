import patterns from './patterns.js'

// add a unique id to each pattern
patterns.forEach((pattern, index) => {
  pattern.id = index
})

const dialogPreview = document.getElementById('dialogPreview')
const dialogCode = document.getElementById('dialogCode')
let selected = null
let bg = '#DDDDDD'
let fg = '#333333'
let size = '64'

// Update values on input
const updateBg = (event) => {
  bg = event.target.value
  updateColorInputText(event.target)
  updatePatterns()
}
const updateFg = (event) => {
  fg = event.target.value
  updateColorInputText(event.target)
  updatePatterns()
}
const updateSize = (event) => {
  size = event.target.value
  updatePatterns()
}

// Set color input text color based on luminance
const updateColorInputText = (input) => {
  const label = input.previousElementSibling
  const color = input.value
  const rgb = color.charAt(0) === '#' ? parseInt(color.substring(1), 16) : parseInt(color, 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  label.style.color = luminance < 128 ? 'white' : 'black'
}

const updateInputValues = () => {
  document.querySelector('.inputBg').value = bg
  updateBg({ target: document.querySelector('.inputBg') })
  document.querySelector('.inputFg').value = fg
  updateFg({ target: document.querySelector('.inputFg') })
  document.querySelector('.inputSize').value = size
  updateSize({ target: document.querySelector('.inputSize') })
}

const getBackgroundImage = (svg) => {
  return `url("data:image/svg+xml,${encodeURIComponent(
    svg.replace(/%b%/g, bg).replace(/%f%/g, fg).replace(/%s%/g, size)
  )}")`
}

const getBackgroundCode = (svg) => {
  return `background-repeat: repeat;
background-size: ${size}px;
background-image: ${getBackgroundImage(svg)};`
}

const viewPattern = (pattern) => {
  selected = patterns.find((p) => p.id === pattern.id)
  dialogPreview.style.backgroundImage = getBackgroundImage(selected.svg)
  dialogPreview.style.backgroundSize = size + 'px'
  dialogPreview.showModal()
}

const codePattern = (pattern) => {
  selected = patterns.find((p) => p.id === pattern.id)
  dialogCode.querySelector('.dialogCodePreview').style.backgroundImage = getBackgroundImage(selected.svg)
  dialogCode.querySelector('.dialogCodePreview').style.backgroundSize = size + 'px'
  dialogCode.querySelector('.dialogCodeTextarea').value = getBackgroundCode(selected.svg)
  dialogCode.showModal()
}

const updatePatterns = () => {
  const patternList = document.getElementById('patternList')
  patternList.innerHTML = ''

  patterns.forEach((pattern, index) => {
    // Pattern card
    const patternCard = document.createElement('div')
    patternCard.className = 'patternCard'

    // Pattern content
    const patternContent = document.createElement('div')
    patternContent.className = 'patternContent'
    patternContent.style.backgroundImage = getBackgroundImage(pattern.svg)
    patternContent.style.backgroundSize = size + 'px'
    patternContent.addEventListener('click', () => viewPattern(pattern))
    patternCard.appendChild(patternContent)

    // Pattern meta
    const patternMeta = document.createElement('div')
    patternMeta.className = 'patternMeta'
    patternMeta.innerHTML = `<div class="patternName">${pattern.name}</div>`
    patternCard.appendChild(patternMeta)

    // View button
    const viewBtn = document.createElement('button')
    viewBtn.className = 'viewBtn'
    viewBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>Preview`
    viewBtn.addEventListener('click', () => viewPattern(pattern))
    patternMeta.appendChild(viewBtn)

    // Code button
    const codeBtn = document.createElement('button')
    codeBtn.className = 'codeBtn'
    codeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>Get Code`
    codeBtn.addEventListener('click', () => codePattern(pattern))
    patternMeta.appendChild(codeBtn)

    // Add pattern to list
    patternList.appendChild(patternCard)
  })
}

const copyCode = () => {
  if (!selected) return
  navigator.clipboard.writeText(getBackgroundCode(selected.svg))
  console.log('Content copied to clipboard')
}

// Add event listeners
document.querySelectorAll('.inputBg').forEach((input) => input.addEventListener('input', updateBg))
document.querySelectorAll('.inputFg').forEach((input) => input.addEventListener('input', updateFg))
document.querySelectorAll('.inputSize').forEach((input) => input.addEventListener('input', updateSize))
document.querySelector('#copyBtn').addEventListener('click', copyCode)
dialogPreview.addEventListener('click', () => {
  // Close dialog when clicking backdrop
  dialogPreview.close()
})
dialogCode.addEventListener('click', (event) => {
  // Close dialog when clicking backdrop but not when clicking content
  if (event.target === dialogCode) {
    dialogCode.close()
  }
})

// Set initial values and rendering
updateInputValues()
updatePatterns()
