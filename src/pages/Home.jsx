import { useState } from "react"

export default function Home(props){
  const [readintromore, setReadIntromore] = useState(false)
  const [readoilmore, setReadOilmore] = useState(false)
  const introText = " Welcome to Techotel Group for industrial food services and laundry equipment Our mission statement and commitment to our customers is to design tailored needs solution for their project, supply them with highest and most respected worldwide brands in the field, and continue our support over the years with market leading maintenance services. From our vast and long experience in this field to our attention to every little detail, we are dedicated to bring our customers the highest quality of service for all their various projects."
  const oilText = "Given the importance of the oil and gas sector in the Middle East, Techotel group provides a various range of services for this sector. From mobile kitchens, cold rooms, and laundries to assisting the oil and gas sector with on site maintenance and providing all essential materials for oil field setups."
  return (
    <div className="homeArticleWraper">
      <article className="introduction">
        <span>Introduction</span>
        <p>{readintromore ? introText : `${introText.substring(0,200)}...`}
            <button onClick={()=> setReadIntromore(!readintromore)}>{!readintromore ? "read more" : "show less"}</button>
        </p>
      </article>
      <artical className="oilAndGas">
        <span>Oil and Gas</span>
        <p>{readoilmore ? oilText : `${oilText.substring(0,200)} ...`}
            <button onClick={()=> setReadOilmore(!readoilmore)}>{!readoilmore ? "read more" : "show less"}</button>
        </p>
      </artical>
    </div>
  )
};
