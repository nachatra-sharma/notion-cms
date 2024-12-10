import notion from '@/notion/notion'
import { NotionToMarkdown } from 'notion-to-md'

export const getAllPublishedPosts = async () => {
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
    // returning the result
    return results
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getSinglePosts = async (slug: string) => {
  try {
    // Fetching single posts from Notion
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID || '',
      filter: {
        property: 'slug',
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    })
    // Getting the blockId from the first result (if exists)
    const blockId = results[0]?.id

    if (!blockId) {
      // If no blockId, return the result with a null response
      return { result: results, response: null }
    }

    const n2m = new NotionToMarkdown({
      notionClient: notion,
      config: {
        separateChildPage: true,
      },
    })

    const mdblocks = await n2m.pageToMarkdown(blockId)
    const mdString = n2m.toMarkdownString(mdblocks)

    // Returning both results and response
    return { result: results, response: mdString }
  } catch (error) {
    console.error(error)
    return { result: null, response: null, error: error }
  }
}
