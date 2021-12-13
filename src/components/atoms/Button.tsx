import Icon from "@material-ui/core/Icon";

type IProps = {
  withIcon?: boolean;
  value?: string;
  className?: string;
  onClick?: () => void;
};

function Button({ withIcon, value, className, onClick }: IProps) {
  return (
    <button
      type="button"
      className={`${className} with-icon`}
      onClick={event => {
        event.preventDefault();
        onClick && onClick();
      }}
    >
      {withIcon ? <Icon>{value}</Icon> : value}
    </button>
  );
}

export default Button;
