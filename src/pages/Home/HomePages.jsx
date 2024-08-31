import { useState } from "react";
import Footer from "../../components/molecules/Footer/Footer";
import Header from "../../components/molecules/layout/Header";
import Navbar from "../../components/molecules/Navbar/Navbar";
import HomePlantilla from "../../components/plantillas/Home/HomePlantilla"


const HomePages = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
      setMenuAbierto(!menuAbierto);
    };

    return (
        <>
        <div className="h-screen flex flex-col overflow-x-hidden">
          <Header contenido={"Coffco"} />
          <div className="flex flex-grow">
            <div
              className={`transition-all duration-300 ease-in-out ${
                menuAbierto ? "w-60" : "w-16"
              }bg-gray-100`}
            >
              <Navbar menuAbierto={menuAbierto} toggleMenu={toggleMenu} />
            </div>
            <div className="w-full overflow-auto">
              <HomePlantilla />
            </div>
          </div>
          <div className="mt-auto w-screen">
            <Footer />
          </div>
        </div>
      </>
    )
    
}
export default HomePages