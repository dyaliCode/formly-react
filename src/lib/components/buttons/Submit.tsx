import { FunctionComponent } from "react";
import { createComponentWithPrefix, IBtnSubmit } from "../../utils";

const Submit: FunctionComponent<IBtnSubmit> = (props: IBtnSubmit) => {
  const renderButton = () => {
    return (
      <button className={props.classes ?? undefined} type="submit">
        {props.text ?? "Submit"}
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

export default Submit;
