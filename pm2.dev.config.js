module.exports = {
  apps: [
    {
      name: "tb6_dev",
      script: "./index.js",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
      cwd: '/usr/local/share/website/dev.tb6.com/tb6_dev'
    }
  ],
};
