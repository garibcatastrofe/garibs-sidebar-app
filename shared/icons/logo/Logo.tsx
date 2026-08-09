import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  primaryColor: string;
  secondaryColor: string;
}

export const Logo = ({ primaryColor, secondaryColor, ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 163.8 31.934"
    {...props}
  >
    <text
      xmlSpace="preserve"
      x={112.501}
      y={133.739}
      style={{
        fontWeight: 900,
        fontSize: "33.5793px",
        lineHeight: 0.85,
        fontFamily: "Orbitron",
        textAlign: "center",
        letterSpacing: 0,
        wordSpacing: 0,
        textAnchor: "middle",
        fill: "#e22718",
        fillRule: "evenodd",
        strokeWidth: 0.671394,
        strokeLinejoin: "bevel",
      }}
      transform="translate(-30.702 -109.529)"
    >
      <tspan
        x={112.501}
        y={133.739}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontFamily: "Orbitron",
          fill: primaryColor,
          fillOpacity: 1,
          strokeWidth: 0.671396,
        }}
      >
        {"App"}
        <tspan
          style={{
            fill: secondaryColor,
            fillOpacity: 1,
          }}
        >
          {"Logo"}
        </tspan>
      </tspan>
    </text>
  </svg>
);
