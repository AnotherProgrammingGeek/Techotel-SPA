import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Partners from "../partners/Partners";

export default function Layout(props){
  return (
    <>
    <container>
            <Header/>
            <div className="midblock">
                  <main >
                      <Outlet/>
                  </main>
              <Partners/>
            </div>
            <Footer/>
    </container>
    </>
  )
};
