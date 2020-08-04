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
      $li.innerHTML = `<a href=./hero.html?id=${hero.id}>${hero.name}</a><button type="button" class="button">Delete Me</button>`
      $ul.append($li)
      let $button = document.querySelector('.button')
      $button.addEventListener('click', () => {
        fetch(`http://localhost:3000/heros/${hero.id}`, {
          method: "DELETE"
        }).then(response => console.log(response))
      })

    })
  })

fetch("http://localhost:3000/powers")
  .then(response => response.json())
  .then(response => {
    response.forEach((power) => {
      const $li = document.createElement('li')
      const $option = document.createElement('option')
      
      $li.innerHTML = `<a href=./power.html?id=${power.id}>${power.name}</a>` 
      $powersUl.append($li)

      $option.textContent = power.name
      $option.name = "power_id" 
      $option.value = power.id
      
      $select.append($option)
    })
  })

const $form = document.querySelector('form')

$form.addEventListener('submit', () => {
  event.preventDefault()

  const name = document.querySelector("#name")
  const superName = document.querySelector("#super-name")
  const powerId = document.querySelector("#power-id")

  fetch("http://localhost:3000/heros", {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      name: name.value, 
      super_name: superName.value, 
      power_id: powerId.value
    })
  }).then(response => response.json())
})