import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const WorkIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg width='1em' height='1em' viewBox='0 0 14 13' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'
        transform='translate(-1.000000, -1.000000)'
      >
        <polygon points='0 0 16 0 16 16 0 16' />
        <path
          d='M13.3333333,4 L10.6666667,4 L10.6666667,2.66666667 C10.6666667,1.92666667 10.0733333,1.33333333 9.33333333,1.33333333 L6.66666667,1.33333333 C5.92666667,1.33333333 5.33333333,1.92666667 5.33333333,2.66666667 L5.33333333,4 L2.66666667,4 C1.92666667,4 1.34,4.59333333 1.34,5.33333333 L1.33333333,12.6666667 C1.33333333,13.4066667 1.92666667,14 2.66666667,14 L13.3333333,14 C14.0733333,14 14.6666667,13.4066667 14.6666667,12.6666667 L14.6666667,5.33333333 C14.6666667,4.59333333 14.0733333,4 13.3333333,4 Z M9.33333333,4 L6.66666667,4 L6.66666667,2.66666667 L9.33333333,2.66666667 L9.33333333,4 Z'
          fill='#999999'
          fillRule='nonzero'
        />
      </g>
    </svg>
  )
}
