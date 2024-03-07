import template1 from "../assets/templates/1.jpg";

const Templates = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-col items-center py-10">
        <p className="text-3xl font-semibold font-quicksand text-gray-700 text-center">
          Select a template from the list to continue
        </p>
        <div className="w-full flex flex-col gap-x-10 mt-10 items-center">
          <div className="w-3/4 md:w-2/4 h-[200px] md:h-80 bg-gray-100 rounded-md">
            <a href="/templates/1" className="">
              <img
                src={template1}
                alt="template1"
                className="object-fit w-full h-full rounded-md hover:scale-[1.01] transition ease-in-out delay-150 duration-300 hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
