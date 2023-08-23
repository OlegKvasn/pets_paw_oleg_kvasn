import type { SVGProps } from "react";

export type TIconProps = SVGProps<SVGSVGElement>;

type TProps = TIconProps & {
  className?: string;
};

export default function BurgerIcon({
  height = "18",
  fill = "#FF868E",
  ...props
}: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 30 18"
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z" />
    </svg>
  );
}
