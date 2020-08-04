const $ul = document.querySelector('ul')
const $select = document.querySelector('select')
const $powersUl = document.querySelector('.powers')


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
      const $li = document.createElement('li')
      const $option = document.createElement('option')
      
      $li.innerHTML = `<a href=./power.html?id=${power.id}>${power.name}</a>` 
      $powersUl.append('$li')

      $option.textContent = power.name
      $option.name = "power_id" 
      $option.value = power.id
      
      $select.append('$option')


    })
  })