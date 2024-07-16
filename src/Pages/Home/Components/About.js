import React from "react";

const About = ({heading}) => {
  return (
    <>
      <h1 className="heading" style={{color:"white"}}>{heading}</h1>
      <section className="about">
        <img src={require("../../../assets/img1.jpg")} />
        <div className="content">
          <h2>About-section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed nisl urna. Mauris tincidunt felis nec nulla dapibus, in cursus
            mi ultricies. Cras interdum justo a nulla placerat, nec gravida mi
            fringilla. Proin ac augue purus. Curabitur a convallis mauris. Sed
            vehicula scelerisque viverra. Sed at est vitae eros faucibus
            bibendum ut sit amet purus.
            orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed nisl urna. Mauris tincidunt felis nec nulla dapibus, in cursus
            mi ultricies. Cras interdum justo a nulla placerat, nec gravida mi
            fringilla. Proin ac augue purus. Curabitur a convallis mauris. Sed
            vehicula scelerisque viverra. Sed at est vitae eros faucibus
            bibendum ut sit amet purus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sed nisl urna. Mauris tincidunt felis nec nulla dapibus, in cursus
            mi ultricies. Cras interdum justo a nulla placerat, nec gravida mi
            fringilla. Proin ac augue purus. Curabitur a convallis mauris. Sed
            vehicula scelerisque viverra. Sed at est vitae eros faucibus
            bibendum ut sit amet purus.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
