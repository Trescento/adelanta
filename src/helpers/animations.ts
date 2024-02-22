const slideDown = {
  initial: { opacity: 0, y: 100 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 1000 } },
  exit: { opacity: 0, y: 100 }
}

const slideUp = {
  initial: { opacity: 0, y: -100 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 1000 } },
  exit: { opacity: 0, y: -100 }
}

const slideLeft = {
  initial: { opacity: 0, x: -100 },
  visibleOnce: { opacity: 1, x: 0, transition: { duration: 1000 } },
  exit: { opacity: 0, x: -100 }
}

const slideRight = {
  initial: { opacity: 0, x: 100 },
  visibleOnce: { opacity: 1, x: 0, transition: { duration: 1000 } },
  exit: { opacity: 0, x: 100 }
}

export const animations = {
  visibleOnce: {
    slideDown,
    slideUp,
    slideLeft,
    slideRight
  }
}
