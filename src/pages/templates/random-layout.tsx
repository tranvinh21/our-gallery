'use client';
import React from 'react';
import type { Image } from '../components/layout';
import Layout from '../components/layout';

// Function to generate a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to get a random column position (1-8)
const getRandomColumn = (): number => {
  return getRandomInt(1, 8);
};

// Function to get a random image ID (1-20)
const getRandomImageId = (): number => {
  return getRandomInt(1, 20);
};

// Generate an array of 40 rows with 4 random columns per row instead of 2
const generateRandomGrid = (): Image[] => {
  const result: Image[] = [];
  let imageCounter = 1;

  for (let row = 1; row <= 40; row++) {
    // Generate 4 random unique column positions for this row

    const col1 = getRandomColumn();
    let col2 = getRandomColumn();

    while (col2 === col1) {
      col2 = getRandomColumn();
    }

    const cols: number[] = [col1, col2];

    // Sort columns so they appear in ascending order
    cols.sort((a, b) => a - b);

    // Add four images to this row with the random column positions
    for (let i = 0; i < cols.length; i++) {
      const imageId = getRandomImageId();
      result.push({
        id: imageCounter++,
        src: `/set-01/${imageId}.jpg`,
        colClass: `${cols[i]}`,
        rowClass: `${row}`,
      });
    }
  }

  return result;
};

// Generate the random grid
const images: Image[] = generateRandomGrid();

const RandomGridLayout = () => {
  return (
    <Layout
      images={images}
      heading='Random Grid Layout'
      backgroundColor='#d8d2cd'
    />
  );
};

export default RandomGridLayout;
