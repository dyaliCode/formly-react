import React from "react";
import { FunctionComponent } from "react";
import { createComponentWithPrefix, IBtnReset } from "../../utils";

const Reset: FunctionComponent<IBtnReset> = (props: IBtnReset) => {
  const renderButton = () => {
    return (
      <button className={props.classes ?? undefined} type="reset">
        {props.text ?? "Reset"}
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

export default Reset;
