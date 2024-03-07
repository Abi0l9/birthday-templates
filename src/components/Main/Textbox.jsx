const Textbox = ({ celebrant, post, wishes, gender }) => {
  return (
    <div className="w-full mt-2 md:mt-10 lg:mt-20">
      <div className="flex flex-col w-full ">
        <div className="text-right mb-3">
          <p className="text-2xl text-center text-orange-700 -mb-3 font-bold">{`"`}</p>
          <p className="text-light text-2xl text-white font-quicksand">HAPPY</p>
          <p className="text-light text-2xl font-satisfy text-orange-400">
            BIRTHDAY
          </p>
        </div>
        <div className="w-full text-white flex flex-col  items-end ">
          <div className="bg-orange-500 font-quicksand text-xl w-4/5 md:w-1/2 text-center rounded-md pb-3">
            {celebrant}
          </div>
          <p className="text-right font-light font-quicksand">{post}</p>
        </div>
        <div className="mt-1 md:mt-3 text-right text-slate-100">
          <p className="text-sm font-quicksand">{wishes}</p>
        </div>
        <div className="mt-1 md:mt-4 text-right text-slate-100 font-semibold">
          <p className="text-orange-500 font-quicksand">
            Happy Birthday, {gender === "Male" ? "Sir" : "Ma"}!
          </p>
        </div>
        <p className="text-2xl text-center text-orange-700 -mt-1 md:mt-0 font-bold">{`"`}</p>
      </div>
    </div>
  );
};

export default Textbox;
