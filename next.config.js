module.exports = {
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: true,
      },
    ];
  },
};