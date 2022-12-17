import React from 'react'

const ClearNight = () => {
  return (
    <svg
      width='313'
      height='332'
      viewBox='0 0 313 332'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_1_21)'>
        <path
          d='M156.578 53.4089C130.665 88.592 126.172 136.607 149.031 176.2C171.89 215.793 215.719 235.91 259.145 231.06C249.912 243.597 237.958 254.504 223.554 262.82C168.725 294.476 99.1427 276.605 68.1383 222.904C37.134 169.203 56.4479 100.007 111.277 68.3516C125.682 60.0352 141.104 55.1371 156.578 53.4089Z'
          fill='#FFEE94'
        />
      </g>
      <g filter='url(#filter1_i_1_21)'>
        <path
          d='M154.162 68.2349C130.508 100.351 126.406 144.181 147.273 180.323C168.139 216.465 208.148 234.828 247.788 230.401C239.36 241.844 228.448 251.801 215.3 259.393C165.25 288.289 101.733 271.975 73.4312 222.955C45.1294 173.935 62.7598 110.771 112.81 81.8751C125.959 74.2836 140.037 69.8124 154.162 68.2349Z'
          fill='url(#paint0_linear_1_21)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_1_21'
          x='0.345215'
          y='0.40892'
          width='311.8'
          height='331.066'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='26.5'
            result='effect1_foregroundBlur_1_21'
          />
        </filter>
        <filter
          id='filter1_i_1_21'
          x='59.9275'
          y='68.2349'
          width='187.861'
          height='209.448'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='4' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_21'
          />
        </filter>
        <linearGradient
          id='paint0_linear_1_21'
          x1='159.313'
          y1='51.2027'
          x2='121.761'
          y2='278.582'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFEE94' />
          <stop offset='1' stopColor='#FF9900' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ClearNight
