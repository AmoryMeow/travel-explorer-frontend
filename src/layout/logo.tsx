import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="50px"
      width="50px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <path
            fill="currentColor"
            d="M314.99,235.827c1.547,1.289,2.692,1.385,3.626,1.385c0.935,0,2.079-0.096,3.626-1.385 c0,0,26.044-18.825,48.736-41.517c22.45-22.45,47.866-51.573,47.866-94.064C418.846,44.877,373.986,0,318.617,0 c-55.368,0-100.229,44.877-100.229,100.246c0,42.491,25.416,71.614,47.866,94.064C288.946,217.002,314.99,235.827,314.99,235.827z M318.617,50.147c27.656,0,50.09,22.434,50.09,50.098c0,27.664-22.434,50.09-50.09,50.09c-27.664,0-50.082-22.426-50.082-50.09 C268.534,72.581,290.953,50.147,318.617,50.147z"
          ></path>
          <path
            fill="currentColor"
            d="M404.663,267.318c0,0-6.221,23.836-34.191,55.263c24.86,6.898,43.506-4.496,43.506-4.496v34.192h8.985h5.52 h8.993v-34.192c0,0,18.639,11.395,43.498,4.496c-27.97-31.427-34.175-55.263-34.175-55.263c6.205,3.11,17.599-2.756,17.599-2.756 c-24.86-27.632-38.671-66.304-38.671-66.304s-13.813,38.672-38.68,66.304C387.048,264.562,398.442,270.428,404.663,267.318z"
          ></path>
          <path
            fill="currentColor"
            d="M316.296,352.768c-121.028-16.326-145.718-20.17-99.02-50.348c34.538-22.322,110.673-38.801,150.062-51.718 H286.19c-56.642,10.976-106.571,20.548-145.412,38.148c7.93,15.658,19.276,34.917,33.539,50.76l21.475,23.869l-27.946,14.392 c1.966,3.393,4.368,7.164,6.987,11.096c64.805,16.415,121.753,22.45,72.694,49.543c-61.436,33.934-102.67,57.463-138.9,73.491 h275.215c27.664-21,75.958-60.324,83.734-84.378C478.574,393.6,442.392,369.787,316.296,352.768z"
          ></path>
          <path
            fill="currentColor"
            d="M120.109,427.332c0,0,24.787,15.149,57.842,5.979c-37.189-41.791-45.449-73.476-45.449-73.476 c8.26,4.133,23.409-3.667,23.409-3.667c-33.054-36.737-51.42-88.158-51.42-88.158s-18.365,51.42-51.428,88.158 c0,0,15.149,7.8,23.417,3.667c0,0-8.268,31.685-45.457,73.476c33.055,9.17,57.85-5.979,57.85-5.979v45.456h11.943h7.341h11.951 V427.332z"
          ></path>
        </g>
      </g>
    </svg>
  );
};
