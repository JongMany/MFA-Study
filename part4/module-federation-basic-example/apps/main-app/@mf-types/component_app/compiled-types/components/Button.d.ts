import { ButtonHTMLAttributes, PropsWithChildren } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "warning" | "primary";
}
export default function Button({ variant, children, onClick, }: PropsWithChildren<ButtonProps>): import("react/jsx-runtime").JSX.Element;
export {};
