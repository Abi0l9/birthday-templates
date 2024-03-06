const Overlay = () => {
  return (
    <div>
      <div className="relative inset-0 z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-500 opacity-50 filter blur-sm"></div>
      </div>
    </div>
  );
};

export default Overlay;
