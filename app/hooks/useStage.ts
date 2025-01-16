'use client'

import { useRef } from 'react'
import Konva from 'konva'
import { Vector2d } from 'konva/lib/types'

export const STAGE_POSITION = 'stagePosition'
export const STAGE_SCALE = 'stageScale'

export const useStage = () => {
  const stageRef = useRef<Konva.Stage | null>(null)

  const dragBackgroundOrigin = useRef<Vector2d>({
    x: 0,
    y: 0,
  })

  const setStageRef = (stage: Konva.Stage) => {
    stageRef.current = stage
  }

  return {
    setStageRef,
    stageRef,
    dragBackgroundOrigin,
  }
}
