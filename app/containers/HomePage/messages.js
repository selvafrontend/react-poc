/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.containers.HomePage";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Header",
  },
  boardTitle: {
    id: `${scope}.boardTitle`,
    defaultMessage: "Body content",
  },
  sectionTitle: {
    id: `${scope}.sectionTitle`,
    defaultMessage: "Section Title",
  },
  footer: {
    id: `${scope}.footer`,
    defaultMessage: "Footer",
  },
});
