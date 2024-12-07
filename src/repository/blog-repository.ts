import notion from '@/notion/notion'

export const getAllPublishedBlogs = async () => {
  try {
    // fetching list of posts from notion
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID || '',
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    })
    return results
  } catch (error) {
    console.log(error)
    return error
  }
}
