type IProps = {
  type: string;
  className?: string;
  id?: string;
  maxLength?: number;
  autoFocus?: boolean;
  value: string;
  onChange?: (event: any) => void;
  onPressEnter?: () => void;
};

function Input({
  type,
  className,
  id,
  maxLength,
  autoFocus,
  value,
  onChange,
  onPressEnter,
}: IProps) {
  return (
    <input
      type={type}
      className={className}
      id={id}
      maxLength={maxLength}
      autoFocus={autoFocus}
      value={value}
      onChange={event => {
        onChange && onChange(event);
      }}
      onKeyPress={event => {
        if (event.code === "Enter") {
          event.preventDefault();
          onPressEnter && onPressEnter();
        }
      }}
    />
  );
}

export default Input;
