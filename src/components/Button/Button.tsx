import { FC, HTMLProps } from "react";
import iconPlus from "../../assets/icon-plus.svg";

interface IButton extends HTMLProps<HTMLButtonElement> {
  variant?: "white" | "red" | "purple";
  className?: string;
  children: string;
  icon?: boolean;
}

const Button: FC<IButton> = ({
  variant = "purple",
  className,
  children,
  icon = false,
  onClick,
}) => {
  return (
    <button
      className={`flex flex-row gap-2 items-center justify-center  ${getBgColor(
        variant
      )}
                  ${
                    icon ? "pl-2 pr-4 py-2" : "px-6 py-2"
                  } rounded-full text-white font-semibold text-[12px] 
                  tracking-wide transition-all ${getHoverColor(
                    variant
                  )} ${className}`}
      onClick={onClick}>
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

const getBgColor = (variant: "white" | "red" | "purple") => {
  if (variant === "purple") return "bg-darkPurple";
  else if (variant === "red") return "bg-red";
  else return "bg-dirtyWhite text-veryLightBlue";
};

const getHoverColor = (variant: "white" | "red" | "purple") => {
  if (variant === "purple") return "hover:bg-purple";
  else if (variant === "red") return "hover:bg-lightRed";
  else return "hover:bg-lightDirtyWhite  ";
};

export default Button;
