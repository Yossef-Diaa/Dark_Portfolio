
import { FaWhatsapp } from "react-icons/fa";
function Whatsapp(){
    return(
        // background: white;
        // border-radius: 50%
        // padding: 5px;
        // margin: 20px;
        <div className=" fixed bottom-0 right-0 w-fit h-fit p-[6px] bg-[#50ca5d] rounded-[50%] m-6">
          <a href="https://wa.me/201025749998" target="_blank">
          <FaWhatsapp className=" w-10 h-10"/>
          </a>
        </div>
    );
}
export default Whatsapp;