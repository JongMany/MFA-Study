import React, { PropsWithChildren } from "react";

type ButtonProps = {};

const Button = ({}: PropsWithChildren<ButtonProps>) => {
  return <button>ClickMe</button>;
};

export default Button;
