'use client';
import { useEffect, useRef } from 'react';
import type { Image } from '../components/layout';
import Layout from '../components/layout';
import ReactLenis, { type LenisRef } from 'lenis/react';
import gsap from 'gsap';
import { generateRandomGrid } from '../../lib/utils';

const images: Image[] = generateRandomGrid();

const RandomGridLayout = () => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.05,

        easing: (t: number) => {
          return 1 - Math.pow(1 - t, 3);
        },
      }}
      ref={lenisRef}
    >
      <Layout
        images={images}
        heading='Random Grid Layout'
        backgroundColor='#d8d2cd'
      />
    </ReactLenis>
  );
};

export default RandomGridLayout;
