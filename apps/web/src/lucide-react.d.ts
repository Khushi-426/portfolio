declare module 'lucide-react' {
  import type { SVGProps } from 'react';
  export type IconProps = SVGProps<SVGSVGElement> & { size?: string | number; absoluteStrokeWidth?: boolean };
  export type Icon = (props: IconProps) => React.ReactNode;
  export const ArrowDown: Icon; export const ArrowDownRight: Icon; export const ArrowUp: Icon; export const ArrowUpRight: Icon;
  export const Github: Icon; export const Linkedin: Icon; export const Mail: Icon; export const MoveUpRight: Icon; export const Sparkles: Icon;
  export const MessageCircle: Icon; export const Volume2: Icon; export const Headphones: Icon; export const Send: Icon; export const VolumeX: Icon; export const X: Icon;
}
