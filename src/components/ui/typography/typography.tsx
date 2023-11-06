import {
  CSSProperties,
  ComponentProps,
  ElementType,
  FC,
  JSXElementConstructor,
  ReactNode,
} from 'react'

import { clsx } from 'clsx'
import { JSX } from 'react/jsx-runtime'

import s from './typography.module.scss'

type IntrinsicElements = JSX.IntrinsicElements

//определяет доступные атрибуты (пропсы) для этого тега
export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never

//определяет тип передаваемого тега
type ReactTag = JSXElementConstructor<any> | keyof IntrinsicElements

//Перечисленные пропсы + прорсы компонента
type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: Ttag
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
} & PropsOf<Ttag>

export const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, color, component, mb, ml, mr, mt, mx, my, style, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    const styles = {
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(mx && { marginLeft: mx, marginRight: mx }),
      ...(my && { marginBottom: my, marginTop: my }),
      ...(color && { color }),
      ...style,
    }

    return (
      <Component className={classNames} style={styles} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Caption: createTypographyComponent('caption'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  Large: createTypographyComponent('large'),
  Link1: createTypographyComponent('link1'),
  Link2: createTypographyComponent('link2'),
  Overline: createTypographyComponent('overline'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
}

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  large: 'p',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

//используются только допустимые компоненты из объекта COMPONENTS
type Component = keyof typeof COMPONENTS
