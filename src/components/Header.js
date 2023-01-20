import { Maincontext,useContext } from "../context";
function Header() {

    const {theme}=useContext(Maincontext)

    return (
      <div className="Header">
        Current theme:{theme}
        
      </div>
    );
  }
  
  export default Header;
  