import { useEffect, useRef, useState } from "react";
import mainBG from "../assets/tutor-1.jpg";
import Logo from "../components/Main/Logo";
import Background from "../components/Main/Background";
import OverlayPic from "../components/Main/OverlayPic";
import Textbox from "../components/Main/Textbox";
import downloadImage from "../utils/downloadImage";
import { defaultWish } from "../const";
import Modal from "../components/Misc/Modal";

const Main = () => {
  const [imgs, setImgs] = useState({
    bg: mainBG,
    overlayImg: mainBG,
    firstLogo: mainBG,
    secondLogo: mainBG,
  });

  const [input, setInput] = useState({
    celebrant: "Mr. John Doe",
    wishes: defaultWish,
    celebrantPost: "Lecturer",
    announcer: "7th SLC Elect",
    gender: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const imgRef = useRef(null);

  const uploadImg = (e) => {
    const key = e.target.name;
    const target = e.target;
    const uploaded = target?.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(uploaded);

    reader.onload = (e) => {
      const thisImg = e.target?.result;
      setImgs({ ...imgs, [key]: thisImg });
    };
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const download = async () => {
    try {
      await downloadImage(imgRef, input.celebrant);
    } catch (e) {
      console.log(e.message);
      alert(e.message);
    }
    closeModal();
  };

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    const wishes = input.wishes;
    if (wishes && wishes?.length > 185) {
      const slicedInput = wishes?.slice(0, 185);
      setInput({ ...input, wishes: slicedInput });
    }
  }, [input.wishes, input]);

  // brightness-[0.5] grayscale opacity-10 bg-blue-500
  return (
    <div className="p-2">
      <>
        <Modal state={isOpen}>
          <div className="w-full flex flex-col items-center">
            <p className="font-semibold text-center text-light text-xl">
              Have you confirmed all input and ready to download image?
            </p>

            <div className="my-2 mt-6 w-full flex flex-row justify-between gap-x-5 items-center">
              <div className="w-full flex flex-col items-center">
                <input
                  type="button"
                  value="Cancel"
                  onClick={closeModal}
                  className="py-1 px-2 bg-red-600 active:bg-red-800 text-gray-100 text-xl rounded-md w-full"
                />
              </div>

              <div className="w-full flex flex-col items-center">
                <input
                  type="button"
                  value="Download"
                  onClick={download}
                  className="px-2 py-1 bg-green-700 active:bg-green-800 text-gray-100 text-xl rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </Modal>
      </>
      <div className="text-xl w-2/6">
        <p className="bg-teal-700 p-1 px-2 text-center rounded-md text-gray-100">
          Template 1
        </p>
      </div>
      <div
        ref={imgRef}
        className="relative w-full flex flex-col items-center rounded-md my-2"
      >
        <>
          <Background img={imgs.bg} />
        </>
        <div className="bg-gray-900 opacity-[0.9] h-[100%] w-full md:w-3/4 absolute top-0 bottom-0 "></div>
        <div className="absolute h-[100%] w-full md:w-3/4 p-3 flex flex-col">
          <div className="flex flex-row gap-x-4  h-[95%] md:h-[100%]">
            <div className="w-2/5 rounded-md flex flex-col justify-between">
              <>
                <Logo first={imgs.firstLogo} second={imgs.secondLogo} />
              </>
              <>
                <OverlayPic img={imgs.overlayImg} />
              </>
            </div>
            <div className="flex-1 rounded-md px-2">
              <>
                <Textbox
                  celebrant={input.celebrant}
                  gender={input.gender}
                  post={input.celebrantPost}
                  wishes={input.wishes}
                />
              </>
            </div>
          </div>
          <div className="w-full text-white z-40 md:-mt-4 text-center md:text-center">
            <p className="font-bold">{input.announcer} - </p>
          </div>
        </div>
      </div>
      <div className="bg w-full my-2 mt-10">
        <>
          <p className="text-xl font-light bg-teal-600 py-1 px-2 w-2/5 md:w-1/5 rounded-md text-white">
            Background
          </p>
          <div className="w-full">
            <div className="w-full pl-5 py-3">
              <label
                htmlFor="bg"
                className="cursor-pointer bg-slate-800 active:bg-slate-400 py-1 px-2 rounded-md text-white"
              >
                Change Background Image
              </label>
              <input
                className="hidden"
                type="file"
                accept="image/*"
                name="bg"
                id="bg"
                onChange={uploadImg}
              />
            </div>
          </div>
        </>

        <>
          <p className=" mt-3 text-xl font-light bg-teal-600 py-1 px-2 w-2/5 md:w-1/5 rounded-md text-white">
            Logo
          </p>
          <div className="w-full pl-5">
            <div className="w-full flex flex-row items-center gap-x-5 flex-wrap">
              <div className="flex flex-col">
                <div className="w-full w-full pl-5 py-3">
                  <div className="">
                    <label
                      htmlFor="firstLogo"
                      className="cursor-pointer bg-slate-800 active:bg-slate-400 py-1 px-2 rounded-md text-white"
                    >
                      Change First Logo
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      accept="image/*"
                      name="firstLogo"
                      id="firstLogo"
                      onChange={uploadImg}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-full w-full pl-5 py-3">
                  <div className="">
                    <label
                      htmlFor="secondLogo"
                      className="cursor-pointer bg-slate-800 active:bg-slate-400 py-1 px-2 rounded-md text-white"
                    >
                      Change Second Logo
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      accept="image/*"
                      name="secondLogo"
                      id="secondLogo"
                      onChange={uploadImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <>
          <p className=" mt-3 text-xl font-light bg-teal-600 py-1 px-2 w-2/5 md:w-1/5 rounded-md text-white">
            Celebrant
          </p>
          <div className="w-full pl-5">
            <div className="flex flex-col pl-5 py-3">
              <div className="flex flex-col gap-y-2 my-2 mt-0 w-full">
                <label htmlFor="wishes" className="font-semibold">
                  Name
                </label>
                <input
                  name="celebrant"
                  id="celebrant"
                  value={input.celebrant}
                  onChange={handleInputs}
                  className="w-full p-2 rounded-md border-[1px] border-teal-200 focus:outline-none focus:border-teal-700"
                />
              </div>

              <div className="flex flex-col gap-y-2 my-2 w-full mt-4">
                <label htmlFor="celebrantPost" className="font-semibold">
                  Position
                </label>
                <input
                  name="celebrantPost"
                  id="celebrantPost"
                  value={input.celebrantPost}
                  onChange={handleInputs}
                  className="w-full p-2 rounded-md border-[1px] border-teal-200 focus:outline-none focus:border-teal-700"
                />
              </div>

              <div className="flex flex-col gap-y-2 my-2 w-full mt-4">
                <label htmlFor="gender" className="font-semibold">
                  Gender
                </label>
                <select
                  onChange={handleInputs}
                  name="gender"
                  id="gender"
                  className="border-b-2 focus:outline-none w-full appearance-none"
                >
                  <option value="">Choose Celebrant{"'"}s Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex flex-col gap-y-2 my-2 w-full mt-4">
                <label htmlFor="wishes" className="font-semibold">
                  Birthday Wishes
                </label>
                <textarea
                  name="wishes"
                  id="wishes"
                  value={input.wishes}
                  onChange={handleInputs}
                  cols="70"
                  rows="6"
                  className="w-full md:w-3/4 p-2 rounded-md border-[1px] border-teal-200 focus:outline-none focus:border-teal-700 resize-none"
                >
                  Type your wishes here
                </textarea>
              </div>

              <div className="w-full w-full my-3">
                <div className="">
                  <label
                    htmlFor="overlayImg"
                    className="cursor-pointer bg-slate-800 active:bg-slate-400 py-1 px-2 rounded-md text-white"
                  >
                    Change {"Celebrant's"} Image
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    name="overlayImg"
                    id="overlayImg"
                    onChange={uploadImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </>

        <>
          <p className=" mt-3 text-xl font-light bg-teal-600 py-1 px-2 w-2/5 md:w-1/5 rounded-md text-white">
            Announcer
          </p>
          <div className="w-full pl-5">
            <div className="flex flex-col pl-5 py-3">
              <div className="flex flex-col gap-y-2 my-2 mt-0 w-full">
                <label htmlFor="wishes" className="font-semibold">
                  Name/Position
                </label>
                <input
                  name="announcer"
                  id="announcer"
                  value={input.announcer}
                  onChange={handleInputs}
                  className="w-full p-2 rounded-md border-[1px] border-teal-200 focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>{" "}
          </div>
        </>
        <div className="w-full flex flex-col items-center">
          <input
            type="button"
            value="Confirm Changes"
            onClick={openModal}
            disabled={isOpen}
            className="p-2 cursor-pointer bg-slate-700 active:bg-slate-800 text-gray-100 text-xl rounded-md w-2/4 md:2/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
