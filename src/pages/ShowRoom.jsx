import sho1 from "../assets/images/showroom/techotel1.jpg"
import sho2 from "../assets/images/showroom/techotel12.jpg"
import sho3 from "../assets/images/showroom/techotel2.jpg"
import sho4 from "../assets/images/showroom/techotel3.jpg"
import sho5 from "../assets/images/showroom/techotel5.jpg"
import sho6 from "../assets/images/showroom/techotel6.jpg"
import sho7 from "../assets/images/showroom/techotel8.jpg"
import sho8 from "../assets/images/showroom/techotel9.jpg"
export default function ShowRoom(props){
  const images = [sho1, sho2, sho3, sho4, sho5, sho6, sho7, sho8]
  const reqImages = images.map((image)=>{
    const img = new Image()
    img.src = image
    return(
      <img src={image} alt= {image}/>
    )
  })
  return (
    <div>
      <article className="showRoom">
        <span>Show Room</span>
        <p>
          <b>Products</b>
          <table>
            <thead>
              <tr>
                <th>Food service equipments</th>
                <th>Laundry service equipments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>refrigeration equipment</td>
                <td>dry clean equipment</td>
              </tr>
              <tr>
                <td>servery equipment</td>
                <td>Washing machines</td>
              </tr>
              <tr>
                <td>fryers</td>
                <td>dryers</td>
              </tr>
              <tr>
                <td>grills</td>
                <td>ironers</td>
              </tr>
              <tr>
                <td>glass washers</td>
                <td>finishing equipment</td>
              </tr>
            </tbody>
          </table>
        </p>
        <div className="showRoomPix">
        {reqImages}
        </div>
      </article>
    </div>
  )
};
