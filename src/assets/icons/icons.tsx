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
        fillRule="evenodd"
        clipRule="evenodd"
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

export function MarvelIcon({ className }: IconsProps) {
  return (
    <svg
      width="130"
      height="52"
      viewBox="0 0 130 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3462_731)">
        <path d="M130 0H0V52H130V0Z" fill="#EC1D24" />
        <path
          d="M126.222 40.059V47.965H111.58V4H119.465V40.059H126.222ZM63.658 25.559C63.048 25.853 62.41 25.999 61.788 26.001V11.861H61.828C62.45 11.856 67.092 12.045 67.092 18.854C67.092 22.413 65.512 24.658 63.658 25.559ZM40.55 34.24L42.733 15.441L44.998 34.24H40.55ZM110.205 12.025V4.007H87.879L84.204 30.786L80.574 4.006H72.522L73.423 11.156C72.495 9.324 69.199 4.006 61.943 4.006C61.896 4.004 53.883 4.006 53.883 4.006L53.852 43.038L47.984 4.007L37.439 4.002L31.367 44.442L31.369 4.007H21.278L17.64 26.724L14.096 4.006H4V47.972H11.95V26.78L15.568 47.972H19.794L23.359 26.78V47.972H38.686L39.614 41.21H45.784L46.711 47.972L61.758 47.98H61.768V47.972H61.788V33.702L63.633 33.432L67.45 47.982H75.234L75.232 47.972H75.254L70.243 30.924C72.781 29.044 75.649 24.28 74.886 19.721V19.719C74.894 19.777 79.615 48 79.615 48L88.871 47.973L95.198 8.123V47.973H110.205V40.065H103.081V29.985H110.205V21.955H103.081V12.024L110.205 12.025Z"
          fill="#FEFEFE"
        />
        <path d="M0 0H30V52H0V0Z" fill="#EC1D24" />
        <path
          d="M31.5 48V4H21.291L17.651 26.735L14.102 4H4V48H12V26.792L15.577 48H19.806L23.374 26.792V48H31.5Z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_3462_731">
          <rect width="130" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
