import { shallowDiffers } from './shallowDiffers';

export function areEqual(prevProps: Object, nextProps: Object): boolean {
  const { style: prevStyle, ...prevRest } = prevProps as any;
  const { style: nextStyle, ...nextRest } = nextProps as any;

  return (
    !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest)
  );
}
