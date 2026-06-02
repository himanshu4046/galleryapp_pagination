import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Galery from "./Galery";
import Pagination from "./Pagination";

const Gallery1Pagination = () => {
  const [Loading, setLoading] = useState(false);
  const [Images, setImages] = useState([]);
  const [Index, setIndex] = useState(1);
  const getdata = async () => {
    setLoading(true);
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=20`);
    const image = response.data;
    setImages(image);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [Index]);
  return (
    <div className="min-h-screen p-4 bg-linear-to-tl from-[#BFDBFF] to-white ">
      <h1 className=" text-center text-7xl font-bold ">Gallery</h1>


      {Loading ? <h1 className="text-6xl text-center h-[70vh]  flex items-center justify-center">Loading...</h1> : <Galery Images={Images} />}

      <Pagination setIndex={setIndex} Index={Index} />
    </div>
  );
};

export default Gallery1Pagination;
