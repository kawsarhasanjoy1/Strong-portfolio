export const textH = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};
export const textI = {
  hidden: { opacity: 0, y: -150 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};
export const textS = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};
export const button = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};
export const icon = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

export const fadeIn = ({direction, delay}: any) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x:
        direction === "left"
          ? 100
          : direction === "right"
          ? -100
          : 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.75],
      },
    },
  };
};
