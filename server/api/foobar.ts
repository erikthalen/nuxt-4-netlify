export default defineEventHandler(async (event) => {
  // const sanity = useSanity()
  // const { query, ...params } = getQuery(event)

  // if (!query) {
  //   throw createError({
  //     statusCode: 500,
  //     message:
  //       "a query must be supplied: await useFetch('/api/sanity-query', { query: { query: <query> } })",
  //   })
  // }

  // const response = await sanity.fetch(query?.toString(), { ...params })

  // console.log('response', response)

  const response = {
    data: 'Hello world! from /server'
  }

  if (!response) {
    throw createError({
      statusCode: 404,
      message: 'Page not found',
      fatal: true
    })
  }

  return response
})