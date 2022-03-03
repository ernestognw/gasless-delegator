module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    // Ugly ts workaround as per https://github.com/vercel/next.js/issues/5666
    webpack: (config) => {
      config.module.rules.forEach((rule) => {
        if (rule.test) {
          const ruleContainsTs = rule.test.toString().includes("ts|tsx");

          if (
            ruleContainsTs &&
            rule.use &&
            rule.use.loader === "next-babel-loader"
          ) {
            rule.include = undefined;
          }
        }
      });

      return config;
    },
  };

  return nextConfig;
};
