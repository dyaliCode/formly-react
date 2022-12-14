import { FunctionComponent } from "react";
import { createComponentWithPrefix, IButton } from "../../utils";

const Button: FunctionComponent<IButton> = (props: IButton) => {
  const renderButton = () => {
    return (
      <button
        className={props.classes ? props.classes.join(" ") : undefined}
        type={props.type}
      >
        {props.text}
      </button>
    );
  };

  return (
    <>
      {props.prefix?.tag
        ? createComponentWithPrefix(renderButton(), props.prefix)
        : renderButton()}
    </>
  );
};

export default Button;
