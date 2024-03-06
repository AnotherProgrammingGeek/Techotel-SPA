import fac1 from "../assets/images/factory/factory1l.jpg";
import fac2 from "../assets/images/factory/factory2l.jpg";
import fac3 from "../assets/images/factory/factory3l.jpg";
import fac4 from "../assets/images/factory/factory4l.jpg";
export default function Factory(props){
  const images = [fac1,fac2,fac3,fac4]
  const reqImages = images.map((image)=>{
    const img = new Image()
    img.src = image
    return(
      <img src={image} alt= {image}/>
    )
  })
  return (
    <div>
      <article className="factory">
        <span>Factory</span>
        <div className="factoryPix">
        {reqImages}
        </div>
      </article>
    </div>
  )
};
