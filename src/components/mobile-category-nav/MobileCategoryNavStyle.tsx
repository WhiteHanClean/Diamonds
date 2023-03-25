import styled from "styled-components";
import { layoutConstant } from "utils/constants";
import { getTheme } from "../../utils/utils";

export const MobileCategoryNavStyle = styled.div`
  position: relative;
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    backround-color: black
  }
  .main-category-holder {
    position: fixed;
    left: 0;
    bottom: ${layoutConstant.mobileNavHeight};
    background: ${getTheme("colors.gray.300")};
    overflow-y: auto;
    display: flex;
    z-index: 1000;  
    padding: 0 10% 0 10%;
    width: 100%;
    justify-content: space-between;
    top: none;
    bottom: 0; 
    .main-category-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      height: 80px;
      width: 90px;
      border-bottom: 1px solid;
      border-bottom-color: ${getTheme("colors.text.disabled")};
      border-top-color: ${getTheme("colors.text.hint")};
      cursor: pointer;
    }
  }

  .container {
    position: fixed;
    top: ${layoutConstant.mobileHeaderHeight};
    bottom: ${layoutConstant.mobileNavHeight};
    left: 90px;
    padding: 0.5rem 1rem;
    flex: 1 1 0;
    overflow-y: auto;
   
  }

  .ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media screen and (min-width: 0px) and (max-width: 480px) {
    .main-category-holder {
      padding: 0 15px 0 15px;
    }
  }
  @media screen and (max-width: 900px) {
    .main-category-holder{
      bottom: ${layoutConstant.mobileNavHeight};
    }
  }
`;