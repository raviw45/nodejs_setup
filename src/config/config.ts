import DotenvFlow from 'dotenv-flow';
DotenvFlow.config();
export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
};

