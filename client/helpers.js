// sort alphabetically
export const sortAlphabetical = (a, b) => {
  a.name = a.name.toLowerCase();
  b.name = b.name.toLowerCase();
  return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
};

// cycle through colors
export const cycleColors = (index) => {
  const colors = ['blue', 'purple', 'red', 'yellow', 'green'];
  return colors[index % colors.length];
};
