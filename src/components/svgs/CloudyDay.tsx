import React from 'react'

const CloudyDay = () => {
  return (
    <svg
      width='394'
      height='380'
      viewBox='0 0 394 380'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_1_30)'>
        <rect x='77' y='77' width='240' height='226' rx='94' fill='#FFEF9A' />
      </g>
      <g filter='url(#filter1_i_1_30)'>
        <path
          d='M301 208C301 265.438 254.438 312 197 312C139.562 312 93 265.438 93 208C93 150.562 139.562 104 197 104C254.438 104 301 150.562 301 208Z'
          fill='url(#paint0_linear_1_30)'
        />
      </g>
      <g filter='url(#filter2_b_1_30)'>
        <g filter='url(#filter3_i_1_30)'>
          <path
            d='M256.326 261.629C257.049 257.524 257.426 253.302 257.426 248.993C257.426 208.68 224.441 176 183.752 176C153.503 176 127.512 194.061 116.166 219.893C106.974 212.03 95.0468 207.283 82.0124 207.283C52.949 207.283 29.3884 230.885 29.3884 260C29.3884 261.621 29.4615 263.225 29.6045 264.809C15.6255 271.593 6 285.828 6 302.29C6 325.326 24.8484 344 48.0992 344H246.901C270.152 344 289 325.326 289 302.29C289 282.464 275.039 265.869 256.326 261.629Z'
            fill='url(#paint1_linear_1_30)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_1_30'
          x='0'
          y='0'
          width='394'
          height='380'
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
            stdDeviation='38.5'
            result='effect1_foregroundBlur_1_30'
          />
        </filter>
        <filter
          id='filter1_i_1_30'
          x='93'
          y='104'
          width='208'
          height='213'
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
          <feOffset dy='5' />
          <feGaussianBlur stdDeviation='9' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_30'
          />
        </filter>
        <filter
          id='filter2_b_1_30'
          x='-21'
          y='149'
          width='337'
          height='222'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='13.5' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_1_30'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_1_30'
            result='shape'
          />
        </filter>
        <filter
          id='filter3_i_1_30'
          x='6'
          y='176'
          width='283'
          height='178'
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
          <feOffset dy='11' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1_30'
          />
        </filter>
        <linearGradient
          id='paint0_linear_1_30'
          x1='181.203'
          y1='264.608'
          x2='266.772'
          y2='114.532'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF9900' />
          <stop offset='1' stopColor='#FFEE94' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1_30'
          x1='24'
          y1='329'
          x2='309.5'
          y2='115.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0.58' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default CloudyDay
