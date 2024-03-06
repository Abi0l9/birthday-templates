const OverlayPic = ({ img }) => {
  return (
    <div className="w-full md:w-3/4 relative bg-transparent">
      <div className="w-[150px] h-[150px] rounded-md bg-transparent">
        <img
          src={img}
          alt="bg"
          className="w-full h-[100%] rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default OverlayPic;
