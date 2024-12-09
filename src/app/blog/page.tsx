import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Button } from "@/components/ui/button";

async function fetchAllBlogs() {
  const blogs = await axios.get("http://localhost:3000/api/blog");
  return blogs?.data;
}

const Blog = async () => {
  const data = await fetchAllBlogs();

  if (!data?.success) {
    <p>Error Page</p>;
  }

  return data?.data?.data?.allPosts.length === 0 ? (
    <p>Loading</p>
  ) : (
    <div className='my-10 bg-[#2f3640]'>
      <div className='w-[90%] mx-auto'>
        <div className='text-center font-bold text-2xl  text-[#e1b12c]'>
          Your Published Blogs.
        </div>
        <div className='flex flex-wrap justify-around my-10'>
          {data?.data?.data?.allPosts.map((post: any, index: number) => {
            return (
              <Card key={index} className='bg-[#f5cd79]'>
                <CardHeader className='flex flex-col gap-2'>
                  <img
                    src={
                      post.image?.files[0]?.file?.url ||
                      post.image.files[0].external.url
                    }
                    alt='Blog Post Image'
                    width={"400px"}
                    height={"300px"}
                    className='object-contain'
                  />
                  <div className='flex gap-2'>
                    {post.tags.multi_select.map((tag: any, index: number) => {
                      return (
                        <div
                          style={{ backgroundColor: tag.color }}
                          className='rounded-sm'
                          key={index}>
                          <p className='text-[#ecf0f1] px-4 py-1'>{tag.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <CardTitle className='text-lg'>
                    {post?.name?.title[0]?.plain_text}
                  </CardTitle>
                  <CardDescription className='text-gray-900 text-base tracking-normal'>
                    {post?.description?.rich_text[0]?.plain_text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post?.slug?.rich_text[0]?.plain_text}`}>
                    <Button className='w-full'>Read More</Button>
                  </Link>
                </CardContent>
                <CardFooter>
                  <div className='flex justify-between w-full'>
                    <div>
                      <p className='text-gray-700 text-base'>
                        {post?.author?.rich_text[0]?.plain_text}
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-700 text-base'>
                        {post?.date?.date?.start}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Blog;
