// These are customizable theme options we only need to check once
let basePath;

exports.onPreBootstrap = ({ store }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
};

exports.createPages = ({ actions, reporter }, themeOptions) => {
  const jestDate = `2022-05-28 21:34:00`;
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/page.js"),
    context: {
      repoUrl: themeOptions.repoUrl || "https://jestjaime.netlify.app/",
      targetDate: themeOptions.targetDate || jestDate,
      mainHeader:
        themeOptions.mainHeader || "How long since we told Jaime to watch:",
      secondaryHeader: themeOptions.secondaryHeader || "Spread the word!",
      daysLabel: themeOptions.daysLabel || "Days",
      hoursLabel: themeOptions.hoursLabel || "Hours",
      minutesLabel: themeOptions.minutesLabel || "Minutes",
      secondsLabel: themeOptions.secondsLabel || "Seconds",
      hideSeconds: !!themeOptions.hideSeconds,
      hideMinutes: !!themeOptions.hideMinutes,
      hideHours: !!themeOptions.hideHours,
      hideDays: !!themeOptions.hideDays,
      hideGithubButton: !!themeOptions.hideGithubButton,
      hideWhatsappShareButton: !!themeOptions.hideWhatsappShareButton,
      hideTwitterShareButton: !!themeOptions.hideTwitterShareButton,
      hideFacebookShareButton: !!themeOptions.hideFacebookShareButton,
      hideParticles: !!themeOptions.hideParticles,
    },
  });
};
