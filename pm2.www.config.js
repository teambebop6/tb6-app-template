module.exports = {
  apps: [
    {
      name: "tb6",
      script: "./index.js",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      cwd: '/usr/local/share/website/www.tb6.com/tb6'
    }
  ],
};
