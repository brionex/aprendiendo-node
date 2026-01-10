import z from 'zod'

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  genre: z.array(
    z.enum([
      'Drama',
      'Crime',
      'Action',
      'Sci-Fi',
      'Romance',
      'Adventure',
      'Fantasy',
      'Thriller',
      'Music',
      'Animation',
      'War'
    ])
  ),
  duration: z.number().positive(),
  rating: z.number().min(0).max(10).default(0),
  director: z.string(),
  cover: z.url()
})

export function validateMovie(object) {
  return movieSchema.safeParse(object)
}

export function validatePartialMovie(object) {
  return movieSchema.partial().safeParse(object)
}
