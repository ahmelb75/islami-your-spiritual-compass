export const IslamicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.03]"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M10 0L20 10L10 20L0 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
  </svg>
);
