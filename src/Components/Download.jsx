import React from "react";
// import resume from "../assets/Resume.pdf";

const Download = () => {
  const onButtonClick = () => {
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <button onClick={onButtonClick}>Download Resume</button>
      </center>
    </>
  );
};

export default Download;
