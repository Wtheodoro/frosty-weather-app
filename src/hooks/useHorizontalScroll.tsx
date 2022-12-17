import { useRef, useEffect } from 'react'

const useHorizontalScroll = () => {
  const elRef: any = useRef(null)

  useEffect(() => {
    const el = elRef.current
    const isTouchPad = el.wheelDeltaY
      ? el.wheelDeltaY === -3 * el.deltaY
      : el.deltaMode === 0

    console.log(isTouchPad)
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])
  return elRef
}

export default useHorizontalScroll
