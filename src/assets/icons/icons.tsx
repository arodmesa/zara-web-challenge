type IconsProps = { className?: string };
export function HeartIcon({ className }: IconsProps) {
  return (
    <svg
      viewBox="0 0 13 12"
      fill="blue"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.5 2.35108L3.5 0.530273L0.5 2.35108V6.25282L6.5 11.3684L12.5 6.25282V2.35108L9.5 0.530273L6.5 2.35108Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function HeartIconOutline({ className }: IconsProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 1.67285L5.01885 0.817986L4.5 0.503077L3.98115 0.817986L4.5 1.67285ZM7.5 3.49366L6.98115 4.34853L7.5 4.66343L8.01885 4.34853L7.5 3.49366ZM1.5 3.49366L0.981151 2.63879L0.5 2.93082V3.49366H1.5ZM1.5 7.39539H0.5V7.85692L0.851203 8.15636L1.5 7.39539ZM7.5 12.511L6.8512 13.272L7.5 13.8251L8.1488 13.272L7.5 12.511ZM13.5 7.39539L14.1488 8.15636L14.5 7.85692V7.39539H13.5ZM13.5 3.49366H14.5V2.93082L14.0188 2.63879L13.5 3.49366ZM10.5 1.67285L11.0189 0.817986L10.5 0.503077L9.98115 0.817986L10.5 1.67285ZM3.98115 2.52772L6.98115 4.34853L8.01885 2.63879L5.01885 0.817986L3.98115 2.52772ZM2.01885 4.34853L5.01885 2.52772L3.98115 0.817986L0.981151 2.63879L2.01885 4.34853ZM2.5 7.39539V3.49366H0.5V7.39539H2.5ZM8.1488 11.75L2.1488 6.63443L0.851203 8.15636L6.8512 13.272L8.1488 11.75ZM8.1488 13.272L14.1488 8.15636L12.8512 6.63443L6.8512 11.75L8.1488 13.272ZM14.5 7.39539V3.49366H12.5V7.39539H14.5ZM14.0188 2.63879L11.0189 0.817986L9.98115 2.52772L12.9812 4.34853L14.0188 2.63879ZM9.98115 0.817986L6.98115 2.63879L8.01885 4.34853L11.0189 2.52772L9.98115 0.817986Z"
        fill="white"
      />
    </svg>
  );
}
export function CutIcon({ className }: IconsProps) {
  return (
    <svg
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.0712891 13.5201H12.9288V0.662598L0.0712891 13.5201Z"
        fill="white"
      />
    </svg>
  );
}
