import "../styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import ImageTextSection from "../components/ImageTextSection";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  "default-page": ImageTextSection
};

storyblokInit({
  accessToken: "7FmwGeMV2rQLGkGafUByDAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
