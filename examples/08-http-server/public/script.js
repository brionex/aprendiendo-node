function renderUsers(users) {
  const template = document.querySelector('.user-card-template')
  const container = document.querySelector('.users-container')
  const fragment = document.createDocumentFragment()

  users.forEach((user) => {
    const clone = template.content.cloneNode(true)

    clone.querySelector('.avatar').src = user.avatar
    clone.querySelector('.name').textContent = user.name
    clone.querySelector('.email').textContent = user.email
    clone.querySelector('.phone').textContent = `📞 ${user.phone}`
    clone.querySelector('.address').textContent = `📍 ${user.address}`

    fragment.appendChild(clone)
  })

  container.appendChild(fragment)
}

fetch('/users')
  .then(async (res) => {
    if (res.ok) {
      const users = await res.json()
      renderUsers(users)
    }
  })
  .catch((err) => {
    console.log(err)
  })

// ----------------------------------------
// Crear nuevo usuario
// ----------------------------------------
const btnCreateUser = document.querySelector('.btn-create-user')
btnCreateUser.addEventListener('click', () => {
  const user = {
    avatar:
      'https://imgs.search.brave.com/IXrSUkbIAvr5P0tOk9vX50cok2Si2PAr4vxLy7M20YQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/Lzg3NTIwODQvYy84/ODQvNzAyLzE5Mi8z/NDcvaWwvNDkyMmZk/LzQwMjM5MjExMTUv/aWxfMzQweDI3MC40/MDIzOTIxMTE1X2N2/azguanBn',
    name: 'Laura Martínez',
    email: 'laura.martinez87@gmail.com',
    phone: '+34 612345678',
    address: 'Calle Mayor 245, Madrid, España'
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }

  fetch('/users', options)
    .then(async (res) => {
      if (res.ok) {
        const { user } = await res.json()
        renderUsers([user])
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
