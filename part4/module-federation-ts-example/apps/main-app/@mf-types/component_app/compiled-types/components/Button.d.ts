import React, { type PropsWithChildren } from "react";
export type ButtonProps = PropsWithChildren<{
    variant?: "primary" | "warning";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;
declare const Button: ({ variant, children, onClick }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
