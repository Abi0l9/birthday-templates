import html2canvas from "html2canvas";

const downloadImage = async (componentRef, celebrantName) => {
  //get the component element to be converted
  const element = componentRef.current;

  //get its content
  const canvas = await html2canvas(element, {
    // width: 1080,
    // height: 1080,
    scale: 3,
  });

  //convert canvas to data URL
  const dataURL = canvas.toDataURL("image/jpg");

  //create download link
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `${celebrantName?.split(" ")?.join("-")}-birthday.jpg`;

  link.click();

  link.remove();
};

export default downloadImage;
