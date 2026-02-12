import { animate, stagger, splitText } from 'https://esm.sh/animejs';

const { chars } = splitText('#footer-heading', { words: false, chars: true });

animate(chars, {
  opacity: [0,1],
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 500 },
    { to: 0, ease: 'outBounce', duration: 500, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(100),
});