export const Position = ['top', 'right', 'bottom', 'left'] as const;
export const Place = ['start', 'center', 'end'] as const;

export type IPosition = typeof Position[number];
export type IPlace = typeof Place[number];
