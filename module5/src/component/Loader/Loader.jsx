import React from "react";
import { Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from "prop-types";
import { Overlay } from "./Loader.styled";

const Loader = ({ isLoading }) => (
  <>
    {isLoading && (
      <Overlay>
        <Oval color="#000000" />
      </Overlay>
    )}
  </>
);
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
