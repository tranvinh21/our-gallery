import type { Image } from '../pages/components/layout';

//
export const COL_COUNT = 8;
export const ROW_COUNT = 40;
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColumn = (): number => {
  return getRandomInt(1, COL_COUNT);
};

const getRandomImageId = (): number => {
  return getRandomInt(1, 20);
};

export const generateRandomGrid = (): Image[] => {
  const result: Image[] = [];
  let imageCounter = 1;

  for (let row = 1; row <= ROW_COUNT; row++) {
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
