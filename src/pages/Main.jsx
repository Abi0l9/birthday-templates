import { useRef, useState } from "react";
import mainBG from "../assets/tutor-1.jpg";
import Logo from "../components/Main/Logo";
import Background from "../components/Main/Background";
import OverlayPic from "../components/Main/OverlayPic";
import Textbox from "../components/Main/Textbox";
import downloadImage from "../utils/downloadImage";

const Main = () => {
  const [img, setImg] = useState(mainBG);
  const imgRef = useRef(null);

  const uploadImg = (e) => {
    const target = e.target;
    const uploaded = target?.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(uploaded);

    reader.onload = (e) => {
      const thisImg = e.target?.result;
      setImg(thisImg);
    };
  };
  // brightness-[0.5] grayscale opacity-10 bg-blue-500
  return (
    <div className="p-2">
      <div className="text-xl">Page Title Goes Here</div>
      <div
        ref={imgRef}
        className="relative w-full flex flex-col items-center rounded-md my-2"
      >
        <>
          <Background img={img} />
        </>
        <div className="bg-gray-900 opacity-[0.9] h-[100%] w-full md:w-3/4 absolute top-0 bottom-0 "></div>
        <div className="flex flex-row gap-x-2 absolute h-[100%] w-full md:w-3/4 p-3 ">
          <div className="w-2/5 rounded-md flex flex-col justify-between">
            <>
              <Logo first={img} second={img} />
            </>
            <>
              <OverlayPic img={img} />
            </>
          </div>
          <div className="flex-1 rounded-md px-2">
            <>
              <Textbox />
            </>
          </div>
        </div>
      </div>
      <div className="bg w-full my-2">
        <>
          <p className="text-xl font-light">Background:</p>
          <div className="w-full">
            <div className="w-full pl-5 py-3">
              <label
                htmlFor="upload"
                className="bg-teal-600 py-1 px-2 rounded-md text-white"
              >
                Upload BG Image
              </label>
              <input
                className="hidden"
                type="file"
                accept="image/*"
                name="img"
                id="upload"
                onChange={uploadImg}
              />
            </div>
          </div>
        </>
        <>
          <p className="text-xl font-light">Overlay:</p>
          <div className="w-full pl-5 py-3">
            <div className="w-full flex flex-row items-center gap-x-5 flex-wrap">
              <div className="flex flex-col">
                <p className="">Add Overlay</p>
                <div className="">
                  <div className="w-14 px=2 h-[25px] rounded-md flex flex-row bg-gray-300">
                    <div className="w-1/2">No</div>
                    <div className="w-1/2">Yes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <div className="">
          <div onClick={() => downloadImage(imgRef)} className="">
            download
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
