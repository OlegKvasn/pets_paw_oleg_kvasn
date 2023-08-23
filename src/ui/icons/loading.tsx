import type { SVGProps } from "react";

export type TIconProps = SVGProps<SVGSVGElement>;

type TProps = TIconProps & {
  className?: string;
};

export default function LoadingIcon({
  height = "16",
  fill = "#FF868E",
  ...props
}: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_1_1565)">
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="url(#paint0_angular_1_1565)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_1_1565"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(90) scale(8)"
        >
          <stop stopColor={fill} />
          <stop offset="1" stopColor={fill} stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_1_1565">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
