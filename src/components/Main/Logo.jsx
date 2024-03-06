const Logo = ({ first, second }) => {
  return (
    <div className="w-full md:w-3/4 z-20 ">
      <div className=" w-full md:w-3/4 gap-3 flex flex-row items-center">
        <div className="w-[30px] rounded-full h-[30px] md:w-[40px] md:h-[40px]">
          <img
            src={first}
            alt="bg"
            className="w-full h-[100%] rounded-full object-cover"
          />
        </div>
        <div className="w-[30px] rounded-full h-[30px] md:w-[40px] md:h-[40px]">
          <img
            src={second}
            alt="bg"
            className="w-full h-[100%] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
