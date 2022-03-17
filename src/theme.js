const size = {
  mobileS: '576px',
  mobile: '767px',
  tablet: '992px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  colors: {
    primary_orange: '#FF6E00',
    white: '#ffffff',
    yellow_text: '#FFD500',
    primary_blue: '#6773E7',
    light_blue: '#3892FF',
    dark_blue: '#222943',
    light_grey: '#707070',
  },
  device: {
    mobile: `only screen and (max-width: 600px) `,
    tablet: `only screen and (min-width: 601px) and (max-width: 1204px) `,
  },
  responsive: {
    mobileS: `only screen and (max-width: ${size.mobileS})`,
    mobile: `only screen and (min-width: ${size.mobileS}) and (max-width: ${size.mobile})`,
    tablet: `only screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptopL: `only screen and (min-width: ${size.laptop}) and (max-width: ${size.laptopL})`,
    desktop: `only screen and (min-width: ${size.laptopL}) and (max-width: ${size.desktop})`,
  },
  font: '"Poppins", sans-serif',
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};

export default theme;
