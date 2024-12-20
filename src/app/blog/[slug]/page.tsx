import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import Image from 'next/image'

async function fetchSingleBlogData(slug: string) {
  const response = await axios.get(`http://localhost:3000/api/blog/${slug}`)
  const result = response.data
  return result
}

const SingleBlog = async ({ params }: any) => {
  const { slug } = await params
  const data = await fetchSingleBlogData(slug)
  const { response, result } = data?.data?.data?.result
  const { properties } = result[0]

  if (!data.success) {
    return <p>Something went wrong please try again.</p>
  }

  return (
    <div className="my-10">
      <div className="w-[90%] mx-auto">
        <div className="mt-10">
          <Image
            src={
              properties.image?.files[0]?.file?.url ||
              properties.image.files[0].external.url
            }
            alt="Blog Main Image"
            width={800}
            height={100}
          />
          <div className="mt-5 flex gap-2">
            {properties.tags.multi_select.map((tag: any, index: number) => {
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
          <h1 className="mt-10 md:text-5xl text-xl font-bold tracking-wide text-white mb-10">
            {properties?.name?.title[0]?.plain_text}
          </h1>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {response.parent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
