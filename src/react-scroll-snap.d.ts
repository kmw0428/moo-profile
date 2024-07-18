declare module 'react-scroll-snap' {
  import { ReactNode, ComponentType } from 'react';

  interface ScrollSnapProps {
    children: ReactNode;
  }

  const ScrollSnap: ComponentType<ScrollSnapProps>;
  export default ScrollSnap;
}
