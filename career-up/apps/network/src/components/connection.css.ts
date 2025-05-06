import clsx from "clsx";

export const wrapper = clsx(
  "network:flex",
  "network:flex-col",
  "network:bg-white",
  "network:p-4",
  "network:rounded-lg",
  "network:gap-4",
  "network:border-solid",
  "network:border",
  "network:border-slate-700",
  "network:items-center",
  "network:hover:border-blue-600",
  "network:hover:cursor-pointer"
);

export const picture = clsx("network:w-12");

export const name = clsx("network:text-base", "network:font-bold");

export const role = clsx("network:text-xs", "network:text-gray-600");

export const networkCount = clsx("network:text-xs", "network:text-gray-600");
