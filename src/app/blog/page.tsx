'use client'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { SkeletonCard } from '@/components/pages/app.skeleton'
import { useState, useEffect } from 'react'
import Image from 'next/image'

async function fetchAllBlogs() {
  const blogs = await axios.get('http://localhost:3000/api/blog')
  return blogs?.data
}

const Blog = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllBlogs()
        if (response?.success) {
          setData(response.data)
        } else {
          setError(true)
        }
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="mt-8">
        <div className="w-[100%] mx-auto">
          <div className="flex flex-col gap-7">
            <h1 className="text-center font-bold text-3xl md:text-6xl font-serif text-white">
              Share your story with the world.
            </h1>
            <p className="text-center font-semibold tracking-wider w-[90%] md:w-[80%] leading-8 mx-auto text-sm md:text-base text-gray-300">
              Discover a collection of engaging and personalized blogs that
              reflect unique stories and perspectives. Each blog is crafted to
              inspire, educate, and entertain. Whether you&apos;re looking to
              grow your knowledge, find inspiration, or simply enjoy great
              content, our blogs have something for everyone.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-around my-10">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <SkeletonCard key={index} />
              ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load blogs.</p>
  }

  return data?.data?.allPosts.length === 0 ? (
    <p className="text-center text-gray-400">No blogs found.</p>
  ) : (
    <div className="mt-8">
      <div className="w-[100%] mx-auto">
        <div className="flex flex-col gap-7">
          <h1 className="text-center font-bold text-3xl md:text-6xl font-serif text-white">
            Share your story with the world.
          </h1>
          <p className="text-center font-semibold tracking-wider w-[90%] md:w-[80%] leading-8 mx-auto text-sm md:text-base text-gray-300">
            Discover a collection of engaging and personalized blogs that
            reflect unique stories and perspectives. Each blog is crafted to
            inspire, educate, and entertain. Whether you&apos;re looking to grow
            your knowledge, find inspiration, or simply enjoy great content, our
            blogs have something for everyone.
          </p>
        </div>
        <div className="flex flex-wrap justify-around md:gap-0 gap-5 my-10">
          {data?.data?.allPosts.map((post: any, index: number) => {
            return (
              <Card
                key={index}
                className="bg-[#030711] border-gray-700 w-[95%] mx-auto md:w-1/3"
              >
                <CardHeader className="flex flex-col gap-2">
                  <div className="w-full h-[250px] overflow-hidden rounded-lg">
                    <Image
                      src={
                        post.image?.files[0]?.file?.url ||
                        post.image.files[0].external.url
                      }
                      alt="Blog Post Image"
                      className="object-cover w-full h-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex gap-2">
                    {post.tags.multi_select.map((tag: any, index: number) => {
                      return (
                        <div
                          style={{ backgroundColor: 'purple' }}
                          className="rounded-full flex"
                          key={index}
                        >
                          <p className="text-[#d3cece] tracking-wide font-medium text-sm px-3 md:px-4 py-1 capitalize">
                            {tag.name}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <CardTitle className="font-bold text-xl font-sans tracking-wide text-white">
                    {post?.name?.title[0]?.plain_text}
                  </CardTitle>
                  <CardDescription className="font-medium tracking-wider leading-10 text-sm text-gray-400">
                    {post?.description?.rich_text[0]?.plain_text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post?.slug?.rich_text[0]?.plain_text}`}>
                    <Button className="w-full bg-[purple] hover:bg-[#c453c4]">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="font-medium tracking-wider text-xs text-gray-400">
                        {post?.author?.rich_text[0]?.plain_text}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium tracking-wider text-xs text-gray-400">
                        {post?.date?.date?.start}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Blog
