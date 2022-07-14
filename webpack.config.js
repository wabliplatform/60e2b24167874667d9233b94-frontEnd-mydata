const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};