import React from "react";
import { css, Global } from "@emotion/core";
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  Footer,
} from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import GithubLink from "../components/github-link";
import ShareButtons from "../components/share-buttons";
import Credits from "../components/credits";
import Particles from "../components/particles";
import MainHeader from "../components/main-header";
import SecondaryHeader from "../components/secondary-header";
import CountdownContainer from "../components/countdown-container";
import SEO from "../components/seo";
import favicon from "../../static/favicon.ico";
import Helmet from "react-helmet";

import "../../assets/css/main.css";
import mainLogo from "../../static/logo.png";

const Layout = ({
  pageContext: {
    mainHeader,
    secondaryHeader,
    daysLabel,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    repoUrl,
    targetDate,
    hideGithubButton,
    hideSeconds,
    hideMinutes,
    hideHours,
    hideDays,
    hideWhatsappShareButton,
    hideTwitterShareButton,
    hideFacebookShareButton,
    hideParticles,
  },
}) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <SEO title={title} />
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      <Header>
        {/* <img src={mainLogo} alt="main logo" width="100px" className="logo" /> */}
        {(hideGithubButton = true)}

        <MainHeader />
      </Header>
      <Main>
        <Container>
          <CountdownContainer
            targetDate={"2022-05-28T21:34"}
            hideDays={hideDays}
            hideHours={hideHours}
            hideMinutes={hideMinutes}
            hideSeconds={hideSeconds}
            daysLabel={daysLabel}
            hoursLabel={hoursLabel}
            minutesLabel={minutesLabel}
            secondsLabel={secondsLabel}
          />
        </Container>
      </Main>
      <Footer>
        <SecondaryHeader text={`Spread the word!`} />
        <ShareButtons
          title={title}
          hideWhatsappShareButton={hideWhatsappShareButton}
          hideTwitterShareButton={hideTwitterShareButton}
          hideFacebookShareButton={hideFacebookShareButton}
        />
        <Credits />
      </Footer>
      {!hideParticles && <Particles />}
    </StyledLayout>
  );
};

export default Layout;
