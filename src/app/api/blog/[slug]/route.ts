import { getSinglePosts } from '@/repository/blog-repository'
import { RejectedResponse } from '@/responses/RejectedResponse'
import { SuccessResponse } from '@/responses/SuccessResponse'

// interface PageProps {
//   params: { slug: string }
// }

export async function GET(req: Request, context: any) {
  try {
    console.log(req)
    // getting the slug value
    const { slug } = await context.params
    console.log(slug)

    // fetching the single post data using slug
    const result = await getSinglePosts(slug)
    // returning the response
    return Response.json(
      SuccessResponse({
        message: 'Successfully fetched the single blog',
        data: { result },
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error in slug api'
    // returning the error response
    return Response.json(
      RejectedResponse({
        message: 'Something went wrong while fetching all the posts',
        error: errorMessage,
      }),
      { status: 400 }
    )
  }
}
