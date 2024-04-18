import Logo from "../assets/images/controller.png";
import "./Header.css";
function header() {
  return (
    <>
      <header className="header">
        <img className ="img" src={Logo} alt="logo"></img>
      </header>
    </>
  )
}
export default header;