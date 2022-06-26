import { FC } from "react";
import iconPlus from "../../assets/icon-plus.svg";
interface IButton {
  className?: string;
  children: string;
  icon?: boolean;
}

const Button: FC<IButton> = ({ className, children, icon = false }) => {
  return (
    <button
      className={`flex flex-row gap-4 items-center justify-center bg-darkPurple 
                  ${
                    icon ? "pl-2 pr-4 py-2" : "px-6 py-2"
                  } rounded-full text-white font-semibold text-[12px] 
                  tracking-wide transition-all hover:bg-purple ${className}`}>
      {icon && (
        <img
          src={iconPlus}
          alt="plus"
          className="bg-white rounded-full p-[10px]"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
