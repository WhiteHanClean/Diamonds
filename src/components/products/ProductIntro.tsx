import Image from "@component/Image";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState, useRef } from "react";
import Avatar from "../avatar/Avatar";
import Box from "../Box";
import Button from "../buttons/Button";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import Rating from "../rating/Rating";
import ImageZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { H1, H2, H3, H6, SemiSpan } from "../Typography";

export interface ProductIntroProps {
  imgUrl?: string[];
  title: string;
  price: number;
  id?: string | number;
}

const ProductIntro: React.FC<ProductIntroProps> = ({
  imgUrl,
  title,
  price = 200,
  id,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectUrlImg, setSelectUrlImg] = useState(
    "/assets/images/products/headphone.png"
  );
  const { state, dispatch } = useAppContext();
  const cartList: CartItem[] = state.cart.cartList;
  const router = useRouter();
  const routerId = router.query.id as string;
  const cartItem = cartList.find(
    (item) => item.id === id || item.id === routerId
  );

  const handleImageClick = (ind: number, url: string) => {
    setSelectedImage(ind);
    setSelectUrlImg(url);
  };

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          qty: amount,
          name: title,
          price,
          imgUrl: imgUrl[0],
          id: id || routerId,
        },
      });
    },
    []
  );

  const zoomProps = {
    image: {
      src: selectUrlImg,
      alt: "My Image",
    },
    zoomImage: {
      src: selectUrlImg,
      alt: "My Image",
    },
    shouldReplaceImage: true,
    zoomMargin: 20,
  };

  return (
    <Box overflow="hidden">
      <Grid container justifyContent="center" spacing={16}>
        <Grid item md={6} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb="50px">
              <ImageZoom {...zoomProps}>
                <Image src={selectUrlImg} alt="My Image" />
              </ImageZoom>
            </FlexBox>
            <FlexBox overflow="auto">
              {imgUrl.map((url, ind) => (
                <Box
                  size={70}
                  minWidth={70}
                  bg="white"
                  borderRadius="10px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  border="1px solid"
                  key={ind}
                  ml={ind === 0 && "auto"}
                  mr={ind === imgUrl.length - 1 ? "auto" : "10px"}
                  borderColor={
                    selectedImage === ind ? "primary.main" : "gray.400"
                  }
                  onClick={() => handleImageClick(ind, url)}
                >
                  <Avatar src={url} borderRadius="10px" size={40} />
                </Box>
              ))}
            </FlexBox>
          </Box>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb="1rem">{title}</H1>

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Brand:</SemiSpan>
            <H6 ml="8px">Ziaomi</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Rated:</SemiSpan>
            <Box ml="8px" mr="8px">
              <Rating
                outof={5}
                color="warn"
                size="medium"
                value={4}
                readonly={false}
              />{" "}
            </Box>
            <H6>(50)</H6>
          </FlexBox>

          <Box mb="24px">
            <H2 color="primary.main" mb="4px" lineHeight="1">
              ${price.toFixed(2)}
            </H2>
            <SemiSpan color="inherit">Stock Available</SemiSpan>
          </Box>

          {!cartItem?.qty ? (
            <Button
              variant="contained"
              size="small"
              color="primary"
              mb="36px"
              onClick={handleCartAmountChange(1)}
            >
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb="36px">
              <Button
                p="9px"
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Icon variant="small">minus</Icon>
              </Button>
              <H3 fontWeight="600" mx="20px">
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>
              <Button
                p="9px"
                variant="outlined"
                size="small"
                color="primary"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Icon variant="small">plus</Icon>
              </Button>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Sold By:</SemiSpan>
            <Link href="/shop/fdfdsa">
              <a>
                <H6 lineHeight="1" ml="8px">
                  Mobile Store
                </H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

ProductIntro.defaultProps = {
  imgUrl: [
    "/assets/images/products/headphone.png",
    "/assets/images/products/hiclipart.com(16).png",
    "/assets/images/products/hiclipart.com(18).png",
  ],
  title: "Mi Note 11 Pro",
  price: 1100,
};

export default ProductIntro;
