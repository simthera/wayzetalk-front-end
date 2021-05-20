import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from './utils/helpers';
import { responsiveTheme } from './utils/responsiveTheme';
import { styled } from '@material-ui/core';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #303030;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: nunito_regular;
    box-sizing: border-box;

  }

  input:focus {
    border: none;
    outline: none;
  }
  input::placeholder {
    color: #fff;
  }

   a{
    cursor: pointer;
   }

  



/* This will only work on chrome and modern browsers */
    
    

    ${breakpoint('tablet')`
      overflow: hidden;
    `}
  }

  strong {
    font-weight: bold;
  }


  h1 {
    font-weight: bold;
  }
  /* Leaflet map searchbox styles */

  
  
  /* Animations */

  @keyframes showFocusMobile {
    0% {
      left: -${calculateRem(50)};
    }
    50% {
      left: -${calculateRem(25)};
      height: ${calculateRem(30)};
    }
    100% {
      height: ${calculateRem(53)};
      left:-${calculateRem(23)};
    }
  }

  @keyframes showFocusTablet {
    0% {
      left: -${calculateRem(50)};
    }
    50% {
      left:-${calculateRem(35)};
      height: ${calculateRem(30)};
    }
    100% {
      height: ${calculateRem(53)};
      left: -${calculateRem(30)};
    }
  }

  .top-row {
    display: flex;
    ${breakpoint('small')`
   width: 90%;
   margin-left: 24px;
   display: block;
  `}
  ${breakpoint('mobile')`
   width: 90%;
   margin-left: 24px;
   display: block;
  `}

    .artist-card {
      display: flex;
      width: 100%;
      marging-bottom: 0;

      p {
        font-size: 12px;
      }

    }
    .artist-image {
      width: 38%;
      min-height: 278px;
      
    }
    .artist-details-wrapper {
      margin-bottom: 0;
    }
    
  }
  .artist-details-wrapper {
    width: 61%;
    margin-bottom: 75px;
    ${breakpoint('small')`
   width: 90%;
  `}
  ${breakpoint('mobile')`
   width: 90%;
  `}
  }
  .top-track-wrapper {
    width: 30%;
    margin-left: 25px;
    color: #fff;

    h1 {
      font-weight: normal;
      font-size: 21px;
      margin-bottom: 14px;
    }
    ${breakpoint('small')`
   width: 90%;
  `}
  ${breakpoint('mobile')`
   width: 90%;
  `}
  }
  .index-number {
    padding-right: 7px;
  }
  `;
const TopRowWrapper = createGlobalStyle`
  display: flex;
`;

export { GlobalStyles, TopRowWrapper };
