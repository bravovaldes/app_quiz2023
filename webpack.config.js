const path = require('path');

module.exports = {
  entry: './src/index.js', // Fichier d'entrée principal de votre application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour le bundle
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // ... Autres règles
    ],
  },
  // ... Autres configurations
};
