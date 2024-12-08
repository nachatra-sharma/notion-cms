import { RejectedResponse } from "@/responses/RejectedResponse";
import { SuccessResponse } from "@/responses/SuccessResponse";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getAllPublishedPosts } from "@/repository/blog-repository";

export async function GET() {
  try {
    // fetching list of posts from notion
    const results: any = await getAllPublishedPosts();

    // if no post found
    if (results.length === 0) {
      throw new Error("No Posts Found.");
    }

    // extracting out the properties from the large response object
    const allPosts = (results as PageObjectResponse[])?.map(
      (post) => post?.properties
    );

    // returning the success response
    return Response.json(
      SuccessResponse({
        message: "Successfully fetched all the posts",
        data: { allPosts },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error in blog api";
    // returning the error response
    return Response.json(
      RejectedResponse({
        message: "Something went wrong while fetching all the posts",
        error: errorMessage,
      }),
      { status: 400 }
    );
  }
}
