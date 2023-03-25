import Icon from "@component/icon/Icon";
import NextImage from "next/image";
import React from "react";
import styled from "styled-components";
import FlexBox from "../FlexBox";
import Typography from "../Typography";

const StyledImage = styled(NextImage)`
  border-radius: 5px;
`;

const coloredBackground = 
 `background: linear-gradient(180deg, rgba(175,105,238,0.8715861344537815) 17%, rgba(120,82,169,0.43461134453781514) 84%); `


export interface MobileCategoryImageBoxProps {
  title: string;
  imgUrl?: string;
  icon?: string;
}

const MobileCategoryImageBox: React.FC<MobileCategoryImageBoxProps> = ({
  title,
  imgUrl,
  icon,
}) => {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center" backgroundColor={"rgba(175,105,238,0.3)"} borderRadius='4px'
     paddingBottom={"4px"}
    >
      {imgUrl ? (
        <StyledImage src={imgUrl} width={800} height={700} objectFit="contain" />
      ) : (
        icon && <Icon size="48px" >{icon}</Icon>
      )}
      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt="0.5rem"
      >
        {title}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;
