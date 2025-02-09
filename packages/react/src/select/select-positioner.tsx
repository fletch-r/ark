import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import { ark, type HTMLArkProps } from '../factory'
import { useSelectContext } from './select-context'

export type SelectPositionerProps = HTMLArkProps<'div'>

export const SelectPositioner = forwardRef<'div', SelectPositionerProps>((props, ref) => {
  const { positionerProps } = useSelectContext()
  const mergedProps = mergeProps(positionerProps, props)

  return <ark.div {...mergedProps} ref={ref} />
})
