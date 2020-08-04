const searchParams = new URLSearchParams(window.location.search)

const id = searchParams.get("id")
const $ul = document.querySelector('.hero')

fetch(`http://localhost:3000/heros/${id}`)
  .then(response => response.json())
  .then(response => {
    const $li = document.createElement('li')
    $li.innerHTML = `${response.name}<a href="./power.html?id=${response.power.id}">${response.power.name}</a>`
    $ul.append($li)
  })
