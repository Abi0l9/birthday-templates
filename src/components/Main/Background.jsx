const Background = ({ img }) => {
  return (
    <div className=" w-full h-[400px] md:h-[400px]  md:w-3/4 rounded-md">
      <img
        src={img}
        alt="bg"
        className="w-full h-[100%] rounded-md object-cover"
      />
    </div>
  );
};

export default Background;
