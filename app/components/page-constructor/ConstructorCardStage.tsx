'use client'

import { MutableRefObject, ReactNode, useCallback } from 'react'
import { Provider, ReactReduxContext } from 'react-redux'
import { Layer, Stage } from 'react-konva'
import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'

interface ConstructorCardStageProps {
  stageRef: MutableRefObject<Konva.Stage>
  width: number
  height: number
  children?: ReactNode
  className?: string
  onSelect: (e?: KonvaEventObject<MouseEvent>, itemList?: Konva.Node[]) => void
}

export function ConstructorCardStage({
  stageRef,
  width,
  height,
  children,
  className,
  onSelect,
}: ConstructorCardStageProps) {
  const onSelectEmptyBackground = useCallback((e: KonvaEventObject<MouseEvent>) => {
    if (e.target.getType() === 'Stage') {
      onSelect(e)
    }
  }, [onSelect])

  return (
    <div
      id='stage'
      className={className}
    >
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage
            width={width}
            height={height}
            ref={stageRef}
            onClick={onSelectEmptyBackground}
          >
            <Provider store={store}>
              <Layer>
                {children}
              </Layer>
            </Provider>
          </Stage>
        )}
      </ReactReduxContext.Consumer>
    </div>
  )
}
