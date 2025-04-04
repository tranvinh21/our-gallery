'use client';
function Heading({
  heading,
  fontColor,
}: { heading: string; fontColor?: string }) {
  return (
    <h1
      className={`font-bold ${fontColor ? `text-${fontColor}` : 'text-black'} uppercase`}
      style={{
        fontSize: 'clamp(1rem, 20vw, 12rem)',
      }}
    >
      {heading}
    </h1>
  );
}

export default Heading;
