import type { SVGProps } from "react";

export type TIconProps = SVGProps<SVGSVGElement>;

type TProps = TIconProps & {
  className?: string;
  theme?: "dark" | "light";
};

export default function ThemeToggleIcon({
  height = "24",
  fill = "#FF868E",
  theme = "dark",
  fillOpacity = "0.2",
  ...props
}: TProps) {
  return (
    <>
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 0 44 24"
          fill={fill}
          {...props}
        >
          <rect width="44" height="24" rx="12" fillOpacity={fillOpacity} />
          <rect x="4" y="4" width="16" height="16" rx="8" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 0 44 24"
          fill={fill}
          {...props}
        >
          <rect width="44" height="24" rx="12" fillOpacity={fillOpacity} />
          <rect x="24" y="4" width="16" height="16" rx="8" />
        </svg>
      )}
    </>
  );
}
