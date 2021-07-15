import React from "react";
import Icon from "@material-ui/core/Icon";

type IProps = {
  dataTestid?: string;
  withIcon?: boolean;
  value?: string;
  className?: string;
  onClick?: (event?: any) => void;
};

function Button({ dataTestid, withIcon, value, className, onClick }: IProps) {
  return (
    <button
      data-testid={dataTestid}
      type="button"
      className={`${className} with-icon`}
      onClick={event => {
        event.preventDefault();
        onClick && onClick(event);
      }}
    >
      {withIcon ? <Icon>{value}</Icon> : value}
    </button>
  );
}

export default Button;
