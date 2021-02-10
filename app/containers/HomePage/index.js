/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import HomeStyle from "./HomeStyles";
//import Section from "../../components/Section";

export default function HomePage() {
  return (
    <HomeStyle>
      <header>
        <div id="logo">
          <FormattedMessage {...messages.header} />
        </div>
      </header>
      <div id="mainBoard">
        <h2>
          <FormattedMessage {...messages.boardTitle} />
        </h2>
       
      </div>
      <footer>
      <div id="logo">
          <FormattedMessage {...messages.footer} />
        </div>
      </footer>
      
    </HomeStyle>
  );
}
