import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";

const Header = () => {
  return (
    <div className="fixed h-[4.5rem] top-0 left-0 right-0 bg-darkBlue flex flex-row text-white justify-between">
      <div className="h-full grid place-content-center w-[4.5rem] bg-purple rounded-r-[20px]">
        <img src={logo} alt="logo" className=" h-7 w-7 hover:cursor-pointer" />
      </div>
      <div className="flex flex-row items-center justify-center gap-6">
        <img src={moon} alt="moon" className=" w-5 h-5 hover:cursor-pointer" />
        <div className="w-20 h-full grid place-content-center border-l-[1px] border-desaturatedBlue">
          <img
            src={avatar}
            alt="avatar"
            className=" w-8 h-8 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
