const HomeComponent = () => {
  return (
    <div className="w-[80%] py-10 mx-auto">
      <p className=" font-mono text-xl text-slate-200">Hi, i am</p>
      <h1 className="text-slate-200 text-4xl font-mono pt-2">
        Nachatra Sharma
      </h1>
      <p className="text-slate-200 text-base pt-7 font-mono leading-7">
        I am working professional, studying computer science. mainly work in web
        technologies.{' '}
        <span className="text-gray-400">
          (for detailed info about my projects and blogs, click its header)
        </span>
      </p>
      {/* projects */}
      <div className="pt-7">
        <h2 className="text-slate-200 text-2xl font-mono pt-2 cursor-pointer hover:underline">
          Projects i have done
        </h2>
        <ul className="list-disc pl-7 flex flex-col gap-5 pt-5">
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">neugrad</span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">neupy</span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">neuaug</span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">ml papers in code</span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">from scratch in c</span>
          </li>
        </ul>
      </div>
      {/* featured blogs */}
      <div className="pt-7">
        <h2 className="text-slate-200 text-2xl font-mono pt-2 cursor-pointer hover:underline">
          blogs
        </h2>
        <ul className="list-disc pl-7 flex flex-col gap-5 pt-5">
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">
              How to increase performace of your web application ?
            </span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">How to get into CS ?</span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">
              Free resources to learn web development ?
            </span>
          </li>
          <li className="text-gray-200 text-base cursor-pointer">
            <span className="hover:underline">What is React Three Fiber ?</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeComponent
