import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react'

type CardProps = {
  background?: CSSProperties['backgroundColor']
  children: ReactNode
  className?: string
  height: CSSProperties['height']
  pb?: CSSProperties['paddingBottom']
  pl?: CSSProperties['paddingLeft']
  pr?: CSSProperties['paddingRight']
  pt?: CSSProperties['paddingTop']
  px?: CSSProperties['paddingRight']
  py?: CSSProperties['paddingLeft']
  width: CSSProperties['width']
}

export const Card = (props: CardProps & Omit<ComponentPropsWithoutRef<'div'>, keyof CardProps>) => {
  const { background, children, className, height, pb, pl, pr, pt, px, py, style, width } = props

  const styles = {
    ...(pr && { paddingRight: pr }),
    ...(pl && { paddingLeft: pl }),
    ...(pt && { paddingTop: pt }),
    ...(height && { height: height }),
    ...(width && { width: width }),
    ...(pb && { paddingBottom: pb }),
    ...(px && { paddingLeft: px, paddingRight: px }),
    ...(py && { paddingBottom: py, paddingTop: py }),
    ...(background && { backgroundColor: background }),
    ...style,
  }

  return (
    <div className={className} style={styles}>
      {children}
    </div>
  )
}
