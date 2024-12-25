'use server'
import { getSinglePosts } from '@/repository/blog-repository'
import { getAllPublishedPosts } from '@/repository/blog-repository'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export async function FetchAllBlogs() {
  try {
    // fetching list of posts from notion
    const results: any = await getAllPublishedPosts()

    // if no post found
    if (results.length === 0) {
      throw new Error('No Posts Found.')
    }

    // extracting out the properties from the large response object
    const allPosts = (results as PageObjectResponse[])?.map(
      (post) => post?.properties
    )

    // returning the response
    return { allPosts }
  } catch (error) {
    console.log(error)
    // returning the error response
    return { message: 'Something went wrong while fetching all the posts' }
  }
}

export async function FetchSingleBlog(id: string) {
  try {
    const result = await getSinglePosts(id)
    // returning the response
    return { result }
  } catch (error) {
    console.log(error)
    // returning the error response
    return { message: 'Something went wrong while fetching all the posts' }
  }
}
