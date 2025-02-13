import styled          from '@emotion/styled'
import { css }         from '@emotion/react'

import React           from 'react'

import ReactDragDrawer from './drag'

const DragDrawer: any = ReactDragDrawer

const Container = (fill) =>
  css({
    minHeight: '100%',
    width: fill ? '100%' : 'calc(100% - 80px)',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 0,
  })

const StyledDrawer = styled.div({
  width: '100%',
  minHeight: '100%',
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
})

const doNothing = () => {
  // do nothing
}

export const Drawer = ({
  children,
  fill = false,
  direction = 'left',
  visible = false,
  onClose = doNothing,
  disable = false,
}) => (
  <DragDrawer
    open={visible}
    direction={direction}
    modalElementClass={Container(fill)}
    disable={disable}
    onRequestClose={() => {
      onClose()
    }}
  >
    <StyledDrawer>{children}</StyledDrawer>
  </DragDrawer>
)
