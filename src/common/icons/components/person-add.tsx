import { IconProps, IconWrapper } from '../iconWrapper'

export const PersonAdd = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g clipPath={'url(#clip0_5661_1919)'}>
            <path
              d={
                'M21 6H20V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V6H17C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8H18V9C18 9.26522 18.1054 9.51957 18.2929 9.70711C18.4804 9.89464 18.7348 10 19 10C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9V8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M10 11C10.7911 11 11.5645 10.7654 12.2223 10.3259C12.8801 9.88635 13.3928 9.26164 13.6955 8.53073C13.9983 7.79983 14.0775 6.99556 13.9231 6.21964C13.7688 5.44371 13.3878 4.73098 12.8284 4.17157C12.269 3.61216 11.5563 3.2312 10.7804 3.07686C10.0044 2.92252 9.20017 3.00173 8.46927 3.30448C7.73836 3.60723 7.11365 4.11992 6.67412 4.77772C6.2346 5.43552 6 6.20887 6 7C6 8.06087 6.42143 9.07828 7.17157 9.82843C7.92172 10.5786 8.93913 11 10 11Z'
              }
              fill={'currentColor'}
            />
            <path
              d={
                'M16 21C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20C17 18.1435 16.2625 16.363 14.9497 15.0503C13.637 13.7375 11.8565 13 10 13C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'clip0_5661_1919'}>
              <rect fill={'white'} height={'24'} width={'24'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
