export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = query.limit ?? 6
  const offset = query.offset ?? 0

  const api = process.env.HUBSPOT_API
  const token = process.env.HUBSPOT_API_KEY
  const response = await $fetch(`${api}/blogs/posts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      state: 'PUBLISHED',
      sort: '-updatedAt',
      limit,
      offset
    }
  })

  return response
})
