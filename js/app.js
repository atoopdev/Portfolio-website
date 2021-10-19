// use to verify is connected. look at dev tools console
console.log('hello world')

const getElement = (selector) => {
  const element = document.querySelector(selector)

  // if class is missing lets you know
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// listen for button click then do
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})