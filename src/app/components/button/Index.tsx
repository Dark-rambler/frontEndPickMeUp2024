import { Button, Tooltip } from "@mui/material";
import React from "react";

type colorButtonsTypes =
  | "edit"
  | "delete"
  | "submit"
  | "history"
  | "eye"
  | "default";

type TButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: colorButtonsTypes;
  disabled?: boolean;
  className?: string;
  showTooltip?: boolean;
  tooltipText?: string;
  endIcon?: React.ReactNode;
  // isLoading?: boolean;
  // isIconOnly?: boolean;
  // typeOf?: "button" | "submit" | "reset" | undefined;
};

const ButtonComponent = ({
  children,
  onClick,
  type = "default",
  showTooltip = true,
  tooltipText = "",
  className = "",
  disabled = false,
  endIcon,
}: TButtonProps) => {
  const getTooltipId = () => {
    return tooltipText ? `tooltip-${type}` : "";
  };

  const getColor = (type: colorButtonsTypes) => {
    switch (type) {
      case "edit":
        return "primary";
      case "delete":
        return "danger";
      case "submit":
        return "success";
      case "history":
        return "blue-500";
      case "eye":
        return "secondary";
      default:
        return "primary";
    }
  };
  return (
    <>
      {showTooltip ? (
        <Tooltip
          title={tooltipText}
          content={tooltipText}
          className={`text-${getColor(type)}`}
        >
          <Button
            id={getTooltipId()}
            className={` bg-gray-100 p-1 ${className} `}
            onClick={onClick}
            disabled={disabled}
            endIcon={endIcon}
          >
            {children}
          </Button>
        </Tooltip>
      ) : (
        <Button
          className={`rounded bg-gray-100 p-1 ${className} `}
          onClick={onClick}
          disabled={disabled}
          >{children}</Button>
      )}
    </>
  );
};
export default ButtonComponent;
