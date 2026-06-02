
const Galery = ({Images}) => {
  return (
    <div className="flex flex-wrap justify-center p-6 gap-4">
        {Images.map(function (ele, idx) {
          return (
            <div key={idx}>
              <div className="w-40 h-30  sm:w-60 sm:h-50 ring-2 rounded-xl ring-zinc-800">
                <img
                  className="w-full h-full  object-cover rounded-xl"
                  src={ele.download_url}
                  alt="loading"
                  loading="lazy"
                />
              </div>
              <h1 className=" text-sm text-center sm:text-xl">{ele.author}</h1>
            </div>
          );
        })}
      </div>
  )
}

export default Galery
