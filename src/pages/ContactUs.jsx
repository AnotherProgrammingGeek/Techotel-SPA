import Form from "../components/form/Form";

export default function ContactUs(props){
  return (
    <div>
      <article className="contactUs">
        <span>Contact us</span>
        <p>
          <ul>
            <li>Damascus, Free Zone / Damascus</li>
            <li>P.O.BOX:  12950</li>
            <li>Tel:+963 11 213 12 11</li>
            <li>Email: Info@Techotelgroup.com</li>
          </ul>
        </p>
      </article>
      <Form/>
    </div>
  )
};
