export const greet = (env: {
  getLine: () => void;
  logLine: (msg: string) => void;
}): void => {
  env.logLine("What's your name?");

  const name = env.getLine();

  env.logLine(`Hello, ${name}!`);
};
