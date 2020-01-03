const Bg = require('../images/bg.png');
const isProd = process.env.NODE_ENV === 'production';
const imagePublicPath = isProd ? 'static/' : '';

export const home = `
    <h1>Home</h1>
    <img src=${imagePublicPath}${Bg} />
`;

export const about = `
    <h1>About</h1>
`;
