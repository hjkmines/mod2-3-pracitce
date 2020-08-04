const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

const $ul = document.querySelector('ul')

fetch(`http://localhost:3000/powers/${id}`)
  .then(response => response.json())
  .then(power => {
    const $li = document.createElement('li')
    $li.innerHTML = `<h1>${power.name}</h1><p>${power.description}</p>`
    $ul.append($li)
  })