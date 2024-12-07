import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOITON_API_KEY,
})

export default notion
