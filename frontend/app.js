const $ul = document.querySelector('ul')

fetch("http://localhost:3000/heros")
  .then(response => response.json())
  .then(response => {
    response.forEach((hero) => {
      const $li = document.createElement('li')
      $li.textContent = hero.name 
      $ul.append($li)
    })
  })