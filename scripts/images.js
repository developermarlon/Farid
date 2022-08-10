const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/images')
    .filter((file) => {
      const name = file.endsWith('.png');
      return name;
    })
    .map((file) => {
      const name = file.replace('@2x.png', '').replace('@3x.png', '');
      return name;
    });
  return Array.from(new Set(array));
};
const generate = () => {
  const properties = imageFileNames()
    .map((pName) => {
      const name = `${pName.replace('.png', '')}: require('./images/${pName}')`;
      return name;
    })
    .join(',\n  ');
  const string = `const images = {
  ${properties}
};
export default images;
`;
  fs.writeFileSync('src/res/images.js', string, 'utf8');
};
generate();
