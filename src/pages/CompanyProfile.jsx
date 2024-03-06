import image1 from "../assets/images/designOffice/o1.jpg";
import image2 from "../assets/images/designOffice/o2.jpg";
import image3 from "../assets/images/designOffice/o6.jpg";
import image4 from "../assets/images/designOffice/o5.jpg";

export default function CompanyProfile(props){
  const images = [image1,image2,image3,image4]
  const reqImages = images.map((image)=>{
    const img = new Image()
    img.src = image
    return(
      <img src={image} alt= {image}/>
    )
  })
  return (
    <div className="companyprofileWraper">
      <article className="profileIntro">
        <span>Company Profile</span>
        <p>
            <b>Techotel Group</b> is one of the largest companies in the Middle East region, especially in (Syria, Lebanon, and Iraq) for food services and laundry equipment.

            Our experience in this field dates back to 1967, with over 45 years of experience in the design department, spare parts, sales, and maintenance.

            Our group goal and commitment is to provide our clients with tailored solutions that suit their needs and demands.

            Techotel group ensures our commitment to deliver high quality food services and laundry products by dealing with the best and most prestigious worldwide companies. 

            Our area of experience covers the following sectors:
            <ul>
              <li>Hotels and resorts</li>
              <li>Restaurants, snacks, and cafes</li>
              <li>Hospitals</li>
              <li>Laundries</li>
              <li>Bespoke kitchens for Villas</li>
              <li>Caterings</li>
              <li>Mobile kitchens</li>
            </ul>
        </p>
      </article>
      <article className="profileHistory">
        <span>History</span>
        <p>
          In 1976 we founded the (center ingénierie technique d'équipements communautaire).
          Abbreviation CITEC, became in 1998 Techotel Group, which started a new age to be Mother Company for

            <ul>
              <li><b>Techotel:</b> Lebanon, then Syria in Damascus Free Zone.</li>
              <li><b>Pro-Chef:</b> Syria, Founded in 2007. It is one of the largest showrooms in the Middle East for food service and laundry equipment. Along with 3 warehouses for immediate delivery.</li>
              <li><b>Al-chef Al-Maher:</b> Erbil / Iraq New born in 2013. </li>
            </ul>
        </p>
      </article>
      <article className="profileOffice">
        <span>Desgin Office</span>
        <p>
          Our design department consists of many specialists; some of them hold around 40 years of experience in this field.
          The design team mission is planning and designing kitchen and laundry equipment layout. These layouts include all the equipment planned along with civil, electrical, sanitary, steam/ gas layouts. Thus, we offer our clients a complete and sufficient study for their projects.
          Our project studies are done using computerized system such as AutoCAD and 3Dmax.
        </p>
        <div className="officePix">
          {reqImages}
        </div>
      </article>

    </div>
  )
};
