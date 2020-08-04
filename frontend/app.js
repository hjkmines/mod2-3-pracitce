const $ul = document.querySelector('ul')
const $select = document.querySelector('select')

// const searchParams = new URLSearchParams(window.location.search)
// const param = searchParams.get()

fetch("http://localhost:3000/heros")
  .then(response => response.json())
  .then(response => {
    response.forEach((hero) => {
      const $li = document.createElement('li')
      $li.innerHTML = `<a href=./hero.html?id=${hero.id}>${hero.name}</a>`
      $ul.append($li)
    })
  })

fetch("http://localhost:3000/powers")
  .then(response => response.json())
  .then(response => {
    response.forEach((power) => {
      
    })
  })