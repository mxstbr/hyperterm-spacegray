// Constants
const backgroundColor = '#343d46';
const foregroundColor = '#c0c5ce';

// Colors
// TODO Figure out good color for Cyan
const colors = [
  backgroundColor,
  '#B4656F', // red
  '#68A281', // green
  '#E2EB98', // yellow
  '#5786B8', // blue
  '#E0BAD7', // pink
  '#38CCD1', // cyan
  '#a7adba', // light gray
  '#4f5b66', // medium gray
  '#B4656F', // red
  '#68A281', // green
  '#E2EB98', // yellow
  '#5786B8', // blue
  '#E0BAD7', // pink
  '#38CCD1', // cyan
  '#ffffff', // white
  foregroundColor
];

// Apply theme
exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: foregroundColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
    `
  })
);
