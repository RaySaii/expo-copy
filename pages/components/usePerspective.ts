import { useRef } from "react"

export default function usePerspective() {
  const boundingRef = useRef<DOMRect | null>(null)

  function onMouseEnter(ev: React.MouseEvent<HTMLDivElement>) {
    boundingRef.current = ev.currentTarget.getBoundingClientRect()
  }

  function onMouseMove(ev: React.MouseEvent<HTMLDivElement>) {
    if (!boundingRef.current) return
    const x = ev.clientX - boundingRef.current.left
    const y = ev.clientY - boundingRef.current.top
    const xPercentage = x / boundingRef.current.width
    const yPercentage = y / boundingRef.current.height
    const xRotation = (xPercentage - 0.5) * 10
    const yRotation = (0.5 - yPercentage) * 10

    ev.currentTarget.style.setProperty("--x-rotation", `${-yRotation}deg`)
    ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`)
    ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`)
    ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`)
    ev.currentTarget.style.setProperty("--scale", `1`)
  }

  function onMouseLeave(ev: React.MouseEvent<HTMLDivElement>) {
    boundingRef.current = null
  }

  return {
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    className:
      "transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale3d(var(--scale),var(--scale),var(--scale))]",
  }
}
