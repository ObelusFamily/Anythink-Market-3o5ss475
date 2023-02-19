

const checkImage = function isImage (url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};

// console.log(checkImage("image"));
  
module.exports = checkImage;