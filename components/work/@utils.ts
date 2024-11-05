export const calculateAnimDurationBasedOnHeight = (
  height: number,
  isOpening?: boolean,
) => {
  const baseSpeed = isOpening ? 0.2 : 0.15;
  const duration = (height / 100) * baseSpeed;
  return Math.min(Math.max(duration, 0.4), 1.2);
};
