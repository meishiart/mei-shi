const fs = require('fs');
const path = require('path');

const paintingsImagesDir = path.join(__dirname, '../public/imgs/paintings');

const generateImageData = () => {
  const files = fs.readdirSync(paintingsImagesDir);
  
  const imageData = files
    .filter(file => /\.(jpg|jpeg|png|svg)$/i.test(file))
    .map((file, index) => ({
      id: index + 1,
      title: path.parse(file).name, // Gets filename without extension
      image: `/imgs/paintings/${file}`
    }));

  // Write to a JSON file
  fs.writeFileSync(
    path.join(__dirname, '../src/paintingsData.json'),
    JSON.stringify(imageData, null, 2)
  );
};

generateImageData(); 