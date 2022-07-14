const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'cproject' : './javascript/cproject.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};