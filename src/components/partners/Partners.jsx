import { PiArrowFatLineRightFill } from "react-icons/pi";
export default function Partners(props){
  
  return (
    <section className="partners">
      <span className="pertnersTitle"> <PiArrowFatLineRightFill /> <span>Our Partners</span></span>
      <div className="imageContainers">
        <img src={require("../../assets/images/partners/1.jpg")} alt="image1"/>
        <img src={require("../../assets/images/partners/2.jpg")} alt="image2"/>
        <img src={require("../../assets/images/partners/3.jpg")} alt="image3"/>
        <img src={require("../../assets/images/partners/4.jpg")} alt="image4"/>
        <img src={require("../../assets/images/partners/5.jpg")} alt="image5"/>
        <img src={require("../../assets/images/partners/6.jpg")} alt="image6"/>
        <img src={require("../../assets/images/partners/7.jpg")} alt="image7"/>
      </div>
    </section>
  )
};
