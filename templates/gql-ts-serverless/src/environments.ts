type Environment = {
  secretMessage: string;
};

const environment: Environment = {
  secretMessage: process.env.SECRET_MESSAGE as string,
};

export default environment;
