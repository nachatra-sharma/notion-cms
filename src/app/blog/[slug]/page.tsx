import axios from "axios";

async function fetchSingleBlogData(slug: string) {
  const response = await axios.get(`http://localhost:3000/api/blog/${slug}`);
  const result = response.data;
  return result;
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const result = await fetchSingleBlogData(slug);
  const { properties } = result?.data?.data?.result[0];
  if (!result.success) {
    <p>Something went wrong please try again.</p>;
  }

  {
    console.log(properties);
  }
  return (
    <div className='my-10 bg-[#2f3640]'>
      <div className='w-[90%] mx-auto'>
        <div className='text-center font-bold text-2xl  text-[#e1b12c]'>
          Blog Details
        </div>
        <div className='mt-10'>
          <img
            src={
              properties.image?.files[0]?.file?.url ||
              properties.image.files[0].external.url
            }
            alt=''
            width={"800px"}
          />
          <div className='mt-5 flex gap-2'>
            {properties.tags.multi_select.map((tag: any, index: number) => {
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
          <h1 className='mt-10 text-3xl font-bold tracking-wide text-white'>
            {properties?.name?.title[0]?.plain_text}
          </h1>
          <p className="mt-10 text-xl font-semibold tracking-wide text-gray-300'">
            {properties?.description?.rich_text[0]?.plain_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
