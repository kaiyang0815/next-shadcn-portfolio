type IconProps = React.HTMLAttributes<SVGElement>;

const DarkIcons = {
  nextjs: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        className="fill-white"
        d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.385 0 50s22.386 50 50 50"
      ></path>
      <path
        fill="url(#paint0_linear_790_6565)"
        d="M83.06 87.511 38.412 30H30v39.983h6.73V38.546L77.777 91.58a50 50 0 0 0 5.283-4.069"
      ></path>
      <path
        fill="url(#paint1_linear_790_6565)"
        d="M70.556 30h-6.667v40h6.667z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_790_6565"
          x1="60.556"
          x2="80.278"
          y1="64.722"
          y2="89.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_790_6565"
          x1="67.222"
          x2="67.111"
          y1="30"
          y2="59.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  tailwindcss: (props: IconProps) => (
    <svg
      width="100"
      height="60"
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.0002 0.000488281C36.6665 0.000488281 28.3334 6.66548 24.9996 19.9942C30.0002 13.3292 35.8337 10.8308 42.4999 12.4964C46.3039 13.4468 49.0224 16.2065 52.0323 19.2602C56.9341 24.2345 62.6075 29.9917 75.0009 29.9917C88.3334 29.9917 96.6677 23.3267 100 9.99672C95.0009 16.6617 89.1674 19.1614 82.4999 17.4958C78.6973 16.5454 75.9787 13.7856 72.9689 10.732C68.067 5.75764 62.3924 0.000488281 50.0002 0.000488281ZM24.9996 29.9917C11.6671 29.9917 3.33274 36.6567 0.000244141 49.9866C4.99962 43.3217 10.8331 40.822 17.5006 42.4888C21.3032 43.4405 24.0218 46.199 27.0316 49.2514C31.9335 54.2257 37.6081 59.9841 50.0002 59.9841C63.334 59.9841 71.6671 53.3191 75.0009 39.9892C70.0002 46.6542 64.1668 49.1538 57.5006 47.487C53.6966 46.5379 50.9781 43.7768 47.9682 40.7244C43.0664 35.7501 37.393 29.9917 24.9996 29.9917Z"
        fill="#06B6D4"
      />
    </svg>
  ),
  shadcnui: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.25"
        clipPath="url(#clip0_790_6991)"
      >
        <path d="M81.25 50 50 81.25M75 15.625 15.625 75"></path>
      </g>
      <defs>
        <clipPath id="clip0_790_6991">
          <path fill="#fff" d="M0 0h100v100H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ),
  framer: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="98"
      fill="none"
      viewBox="0 0 67 98"
      {...props}
    >
      <path
        fill="#fff"
        d="M63.822 63.822c1.05 1.05.306 2.844-1.178 2.844H35c-.922 0-1.667.745-1.667 1.667v27.644c0 1.484-1.794 2.228-2.844 1.178L.65 67.316A2.23 2.23 0 0 1 0 65.744V35c0-.923.744-1.667 1.667-1.667h31.666zM33.333 33.333 2.844 2.844C1.794 1.794 2.54 0 4.022 0H65c.922 0 1.667.744 1.667 1.666v30c0 .923-.745 1.667-1.667 1.667z"
      ></path>
    </svg>
  ),
  reactjs: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="100"
      fill="none"
      viewBox="0 0 101 100"
      {...props}
    >
      <path
        fill="#61DAFB"
        d="M50.307 58.817a8.816 8.816 0 1 0 0-17.633 8.816 8.816 0 0 0 0 17.633"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.062s-21.18-18.063-47.306-18.063C24.18 31.938 3 40.025 3 50.001s21.18 18.062 47.307 18.062Z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M34.664 59.032C47.727 81.658 65.321 95.957 73.96 90.969c8.64-4.988 5.053-27.373-8.01-50C52.885 18.343 35.291 4.044 26.652 9.032s-5.052 27.373 8.011 50Z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M34.664 40.97c-13.063 22.626-16.65 45.011-8.01 50 8.638 4.987 26.232-9.312 39.295-31.938 13.064-22.627 16.65-45.012 8.01-50-8.638-4.988-26.232 9.31-39.295 31.937Z"
      ></path>
    </svg>
  ),
  mdx: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="106"
      height="66"
      fill="none"
      viewBox="0 0 106 66"
      {...props}
    >
      <path
        stroke="#fff"
        strokeWidth="5.051"
        d="M8.05 3h89.9A5.05 5.05 0 0 1 103 8.051v49.495a5.05 5.05 0 0 1-5.05 5.05H8.05A5.05 5.05 0 0 1 3 57.546V8.05a5.05 5.05 0 0 1 5.05-5.05Z"
      ></path>
      <path
        fill="#fff"
        d="M15.626 49.97V15.627h10.101l10.101 12.626L45.93 15.627H56.03V49.97h-10.1V30.273L35.827 42.9l-10.1-12.627V49.97zm63.131 0L63.607 33.304h10.101V15.627h10.101v17.676h10.101z"
      ></path>
    </svg>
  ),
};

const LightIcons = {
  nextjs: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        fill="#000"
        d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.385 0 50s22.386 50 50 50"
      ></path>
      <path
        fill="url(#paint0_linear_790_2962)"
        d="M83.06 87.511 38.412 30H30v39.983h6.73V38.546L77.777 91.58a50 50 0 0 0 5.283-4.069"
      ></path>
      <path
        fill="url(#paint1_linear_790_2962)"
        d="M70.556 30h-6.667v40h6.667z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_790_2962"
          x1="60.556"
          x2="80.278"
          y1="64.722"
          y2="89.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_790_2962"
          x1="67.222"
          x2="67.111"
          y1="30"
          y2="59.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  tailwindcss: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="60"
      fill="none"
      viewBox="0 0 100 60"
      {...props}
    >
      <path
        fill="#06B6D4"
        d="M50 0Q30 0 25 19.994q7.5-9.996 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.732 22.969 10.732q20 0 24.999-19.995-7.5 9.997-17.5 7.499c-3.803-.95-6.521-3.71-9.531-6.764C68.067 5.758 62.392 0 50 0M25 29.992q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.762C31.933 54.226 37.608 59.984 50 59.984q20 0 25-19.995-7.5 9.998-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 35.75 37.393 29.992 25 29.992"
      ></path>
    </svg>
  ),
  shadcnui: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.25"
        clipPath="url(#clip0_790_3388)"
      >
        <path d="M81.25 50 50 81.25M75 15.625 15.625 75"></path>
      </g>
      <defs>
        <clipPath id="clip0_790_3388">
          <path fill="#fff" d="M0 0h100v100H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ),
  framer: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="98"
      fill="none"
      viewBox="0 0 67 98"
      {...props}
    >
      <path
        fill="#000"
        d="M63.822 63.822c1.05 1.05.306 2.844-1.178 2.844H35c-.922 0-1.667.745-1.667 1.667v27.644c0 1.484-1.794 2.228-2.844 1.178L.65 67.316A2.22 2.22 0 0 1 0 65.744V35c0-.922.744-1.667 1.667-1.667h31.666zM33.333 33.333 2.844 2.844C1.794 1.794 2.54 0 4.022 0H65c.922 0 1.667.744 1.667 1.666v30c0 .923-.745 1.667-1.667 1.667z"
      ></path>
    </svg>
  ),
  reactjs: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="100"
      fill="none"
      viewBox="0 0 101 100"
      {...props}
    >
      <path
        fill="#61DAFB"
        d="M50.307 58.817a8.816 8.816 0 1 0 0-17.633 8.816 8.816 0 0 0 0 17.633"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.062s-21.18-18.063-47.306-18.063C24.18 31.938 3 40.025 3 50.001s21.18 18.062 47.307 18.062Z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M34.664 59.032C47.727 81.658 65.321 95.957 73.96 90.969c8.64-4.988 5.053-27.373-8.01-50C52.885 18.343 35.291 4.044 26.652 9.032s-5.052 27.373 8.011 50Z"
      ></path>
      <path
        stroke="#61DAFB"
        strokeWidth="5"
        d="M34.664 40.97c-13.063 22.626-16.65 45.011-8.01 50 8.638 4.987 26.232-9.312 39.295-31.938 13.064-22.627 16.65-45.012 8.01-50-8.638-4.988-26.232 9.31-39.295 31.937Z"
      ></path>
    </svg>
  ),
  mdx: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="106"
      height="66"
      fill="none"
      viewBox="0 0 106 66"
      {...props}
    >
      <path
        stroke="#000"
        strokeWidth="5.051"
        d="M8.05 3h89.9A5.05 5.05 0 0 1 103 8.051v49.495a5.05 5.05 0 0 1-5.05 5.05H8.05A5.05 5.05 0 0 1 3 57.546V8.05a5.05 5.05 0 0 1 5.05-5.05Z"
      ></path>
      <path
        fill="#000"
        d="M15.626 49.97V15.627h10.101l10.101 12.626L45.93 15.627H56.03V49.97h-10.1V30.273L35.827 42.9l-10.1-12.627V49.97zm63.131 0L63.607 33.304h10.101V15.627h10.101v17.676h10.101z"
      ></path>
    </svg>
  ),
};

function NextJSIcon() {
  return (
    <>
      <DarkIcons.nextjs className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.nextjs className="h-4 w-auto dark:hidden" />
    </>
  );
}
function TailwindCSSIcon() {
  return (
    <>
      <DarkIcons.tailwindcss className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.tailwindcss className="h-4 w-auto dark:hidden" />
    </>
  );
}
function ShadcnUIIcon() {
  return (
    <>
      <DarkIcons.shadcnui className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.shadcnui className="h-4 w-auto dark:hidden" />
    </>
  );
}
function ReactJSIcon() {
  return (
    <>
      <DarkIcons.reactjs className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.reactjs className="h-4 w-auto dark:hidden" />
    </>
  );
}
function FarmerIcon() {
  return (
    <>
      <DarkIcons.framer className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.framer className="h-4 w-auto dark:hidden" />
    </>
  );
}
function MDXIcon() {
  return (
    <>
      <DarkIcons.mdx className="hidden h-4 w-auto dark:inline-block" />
      <LightIcons.mdx className="h-4 w-auto dark:hidden" />
    </>
  );
}

export {
  DarkIcons,
  FarmerIcon,
  LightIcons,
  MDXIcon,
  NextJSIcon,
  ReactJSIcon,
  ShadcnUIIcon,
  TailwindCSSIcon,
};
