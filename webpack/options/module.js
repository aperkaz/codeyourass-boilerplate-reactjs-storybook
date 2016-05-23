const { assign } = Object;

export const common = {
  rules: [
    // FILES: js, jsx
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          // OVERRIDES BABELRC
          options: {
            babelrc: false,
            presets: [
              ['es2015', { modules: false }],
              'react',
            ],
            plugins: ['syntax-dynamic-import'],
          },
        },
      ],
    },
    // FILES: png, jpg, gif
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      query: {
        limit: 32000,
      },
    },
    // FILES: css
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
    // FILES: ttf, eot, woff2, woff
    {
      test: /\.(ttf|eot|woff2|woff)$/,
      loader: 'file-loader',
    },
    // FILES: svg
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    },
  ],
};

export const storybook = assign({}, { rules: [
  ...common.rules,
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
] });
