import { FunctionComponent } from "react";
import {
  createComponentWithPrefix,
  IPrefix,
  IBtnSubmit,
  IBtnReset,
} from "../../utils";
import Button from "./Button";

type IProps = {
  btnSubmit?: IBtnSubmit;
  btnReset?: IBtnReset;
  prefix?: IPrefix;
};

const Action: FunctionComponent<IProps> = (props: IProps) => {
  const renderAction = () => {
    return (
      <>
        <Button
          type="submit"
          prefix={props.btnSubmit?.prefix}
          classes={props.btnSubmit?.classes}
          text={props.btnSubmit?.text ?? "Submit"}
        />
        <Button
          type="reset"
          prefix={props.btnReset?.prefix}
          classes={props.btnReset?.classes}
          text={props.btnReset?.text ?? "Reset"}
        />
      </>
    );
  };

  return (
    <>
      {props.prefix?.tag
        ? createComponentWithPrefix(renderAction(), props.prefix)
        : renderAction()}
    </>
  );
};

export default Action;
