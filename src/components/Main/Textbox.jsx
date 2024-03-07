const Textbox = ({ celebrant, post, wishes, gender }) => {
  return (
    <div className="w-full mt-2 md:mt-10 lg:mt-20">
      <div className="flex flex-col w-full ">
        <div className="text-right mb-3">
          <p className="text-2xl text-center text-red-600 -mb-3 font-bold">{`"`}</p>
          <p className="text-light text-2xl text-white">HAPPY</p>
          <p className="text-light text-2xl text-white">BIRTHDAY</p>
        </div>
        <div className="w-full text-slate-100 flex flex-col  items-end ">
          <div className="bg-pink-700 w-4/5 md:w-1/2 text-center rounded-md pb-3">
            {celebrant}
          </div>
          <p className="text-right font-semibold">{post}</p>
        </div>
        <div className="mt-1 md:mt-3 text-right text-slate-100">
          <p className="text-sm">{wishes}</p>
        </div>
        <div className="mt-1 md:mt-4 text-right text-slate-100 font-semibold">
          <p className="text-pink-600">
            Happy Birthday, {gender === "Male" ? "Sir" : "Ma"}!
          </p>
        </div>
        <p className="text-2xl text-center text-red-600 -mt-1 md:mt-0 font-bold">{`"`}</p>
      </div>
    </div>
  );
};

export default Textbox;
