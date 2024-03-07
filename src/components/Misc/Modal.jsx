const Modal = ({ children, state }) => {
  if (!state) return null;
  return (
    <div>
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-500 opacity-50 filter blur-sm"></div>
        <div className="my-20 z-10 bg-white p-6 rounded-md shadow-lg w-11/12 md:w-2/4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
