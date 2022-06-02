module.exports = {
  siteMetadata: {
    title: "Jest Jaime",
    author: "@vcordero07",
    description: "How long does it take Jaime to watch something?",
    url: `https://jestjaime.netlify.app/`,
    image: "mainBcg.png",
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
