fetch('/users')
  .then(async (res) => {
    if (res.ok) {
      const users = await res.json()

      const template = document.querySelector('.user-card-template')
      const container = document.querySelector('.users-container')

      users.forEach((user) => {
        const clone = template.content.cloneNode(true)

        clone.querySelector('.avatar').src = user.avatar
        clone.querySelector('.name').textContent = user.name
        clone.querySelector('.email').textContent = user.email
        clone.querySelector('.phone').textContent = `📞 ${user.phone}`
        clone.querySelector('.address').textContent = `📍 ${user.address}`

        container.appendChild(clone)
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
