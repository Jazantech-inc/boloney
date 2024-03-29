import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { opacity, zIndex } from "../../design";
import { HandImage, HandContainer, HandWrapper, HandImageWrapper, HandPaint } from "../hand/";
import { fadeOut, slideUpFromBottom } from "../../atoms";

interface Props {
  isDice?: boolean;
  isSidebarVisible?: boolean;
}

export const LandingSideBarWrapper = styled.section`
  min-height: 100vh;
  height: 100%;
  position: fixed;
  width: 12.5vw;
  z-index: ${zIndex.inFront};
`;

export const ColumnGroup = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 30px;
  ${HandImageWrapper} {
    height: 30vh;
    width: 14.81vw;
  }

  ${HandContainer} {
    height: 30vh;
    width: 14.81vw;
  }

  ${HandImage} {
    width: auto !important;
    height: 100% !important;
  }
  ${HandPaint} {
    width: auto !important;
    height: 100% !important;
  }

  ${({ isDice }) =>
    isDice
      ? `
      padding-top: 0;
      zoom: 0.45;
      gap: 11vh;

  `
      : `
      zoom: 0.37;
      gap: 17vh;
      padding-top: 5vh;
      `}
`;

export const SidebarWrapper = styled.div<Props>`
  ${({ isSidebarVisible }) =>
    isSidebarVisible
      ? css`
          visibility: visible;
          ${HandWrapper} {
            -webkit-animation-name: ${slideUpFromBottom};
            -webkit-animation-timing-function: cubic-bezier(0.71, -0.36, 0.48, 1.54);
            -webkit-animation-duration: 1s;
            -webkit-animation-fill-mode: forwards;
          }
          ${HandWrapper}:nth-of-type(1) {
            animation-delay: 2.2s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(2) {
            animation-delay: 1.8s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(3) {
            animation-delay: 1.4s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(4) {
            animation-delay: 1.1s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(5) {
            animation-delay: 0.8s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(6) {
            animation-delay: 0.4s;
            opacity: ${opacity.hidden};
          }
          ${HandWrapper}:nth-of-type(7) {
            animation-delay: 0s;
            opacity: ${opacity.hidden};
          }
        `
      : css`
          animation: ${fadeOut} 1.2s forwards;
          visibility: hidden;
        `}
`;

export const SidebarContainer = styled.div`
  padding-top: 5.5vh;
`;
