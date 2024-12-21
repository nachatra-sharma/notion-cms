import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[96vh]">
      <div className="flex flex-col gap-7 justify-center items-center">
        <Image
          src={'/work-in-progress.jpg'}
          width={500}
          height={200}
          className="object-contain"
          alt="Work in Progress Image"
        />
        <h2 className="text-gray-400 text-4xl pt-7 text-center leading-relaxed tracking-wider">
          We&apos;re sorry! This page isn&apos;t ready yet, <br /> but
          we&apos;re working hard to fix it.
        </h2>
      </div>
    </div>
  )
}
export default NotFound
