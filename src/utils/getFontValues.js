export const rem2px = (value) => {
  return Math.round(parseFloat(value) * 16);
};

export const px2rem = (value) => {
  return `${value / 16}rem`;
};

export const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (min-width: 600px)": {
      fontSize: px2rem(sm),
    },
    "@media (min-width: 900px)": {
      fontSize: px2rem(md),
    },
    "@media (min-width: 1200px)": {
      fontSize: px2rem(lg),
    },
  };
};
