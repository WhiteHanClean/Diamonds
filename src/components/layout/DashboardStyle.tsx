import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Card from "../Card";
import FlexBox from "../FlexBox";
import NavLink from "../nav-link/NavLink";

export const DashboardNavigationWrapper = styled(Card)`
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px);
    box-shadow: none;
    overflow-y: auto;
  }
`;

export const StyledDashboardNav = styled(NavLink)<{ isCurrentPath?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid;
  color: ${({ isCurrentPath }) =>
    isCurrentPath ? getTheme("colors.primary.main") : "inherit"};
  border-top-color: ${({ isCurrentPath }) =>
    isCurrentPath ? getTheme("colors.primary.main") : "transparent"};

  .dashboard-nav-icon-holder {
    color: ${getTheme("colors.gray.600")};
  }

  :hover {
    border-top-color: ${getTheme("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${getTheme("colors.primary.main")};
    }
  }
`;

export const StyledDashboardPageTitle = styled(FlexBox)``;
