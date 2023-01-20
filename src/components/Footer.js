import { Maincontext,useContext } from "../context";
function Footer() {
    const {theme,setTheme}=useContext(Maincontext)
    const switchTheme=()=>{
        setTheme(theme==="light" ? "dark":"light")
    }
    return (
      <div className="Footer">
        <button onClick={switchTheme}>Switch theme</button>
      </div>
    );
  }
  
  export default Footer;
  