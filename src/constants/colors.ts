export interface ColorConfig {
  iconBg: string;
  textColor: string;
}

export type ColorVariant = 'slate' | 'blue';

export const INFO_ITEM_COLORS: Record<ColorVariant, ColorConfig> = {
  slate: {
    iconBg: 'bg-slate-100',
    textColor: 'text-slate-600'
  },
    blue: {
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
};

export const DEFAULT_COLOR: ColorVariant = 'slate';
