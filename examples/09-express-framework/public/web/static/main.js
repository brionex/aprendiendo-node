const API_URL = 'http://localhost:1234/movies'
const container = document.getElementById('movies')
const state = document.getElementById('state')

async function loadMovies() {
  try {
    const res = await fetch(API_URL)

    if (!res.ok) {
      throw new Error('Error al cargar datos')
    }

    const movies = await res.json()

    state.remove()

    movies.forEach((movie) => {
      const card = document.createElement('div')
      card.className = 'card'

      card.innerHTML = `
              <img
                src="${movie.cover}"
                alt="${movie.title}"
                loading="lazy"
              />
              <div class="content">
                <div class="title">${movie.title}</div>
                <div class="meta">
                  ${movie.year} • ${movie.genre.join(', ')} • ${
        movie.duration
      } min
                </div>
                <div class="rating">⭐ ${movie.rating}</div>
              </div>
            `

      container.appendChild(card)
    })
  } catch (err) {
    state.textContent = '❌ No se pudieron cargar las películas'
    state.className = 'error'
    console.error(err)
  }
}

loadMovies()
