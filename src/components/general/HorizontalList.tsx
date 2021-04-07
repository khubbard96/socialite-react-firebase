import React from "react";
import { List } from "@material-ui/core";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0
};

const HorizontalList: React.FC = ({ children }) => {
  return <List style={flexContainer}>{children}</List>;
};
