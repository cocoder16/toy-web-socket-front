import { useRef } from "react";

type IProps = {
  dataTestid?: string;
  className?: string;
  id?: string;
  maxLength?: number;
  autoFocus?: boolean;
  value: string;
  onChange?: (event: any) => void;
  onPressEnter?: () => void;
};

function Textarea({
  dataTestid,
  className,
  id,
  maxLength,
  autoFocus,
  value,
  onChange,
  onPressEnter,
}: IProps) {
  const isPressingKey = useRef<boolean>(false);

  return (
    <textarea
      data-testid={dataTestid}
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
          if (onPressEnter && !isPressingKey.current) {
            isPressingKey.current = true;
            onPressEnter();
          }
        }
      }}
      onKeyUp={event => {
        if (event.code === "Enter") {
          event.preventDefault();
          if (isPressingKey.current) {
            isPressingKey.current = false;
          }
        }
      }}
    />
  );
}

export default Textarea;
