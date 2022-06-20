import React from "react";
import Image from "next/image";
import { Box, Typography, Flex } from "root/components/design-system";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import ContortionsItemBuy from "./ContortionsItemBuy";

const TwistedTitle = styled(Typography)`
  font-family: "ArthemysDisplay-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 72px;
  color: #00000;
  border: 0.2px solid #00000;
  margin-top: 60px;
  margin-bottom: 10px;
  ${down("sm")} {
    font-size: 42px;
    line-height: 42px;
    margin-top: 50px;
    margin-left: 10px;
  }
`;

const TwistedWrapper = styled(Box)`
  display: flex;
  height: 25px;
`;

const CreatedBy = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: italic;
  font-weight: 300;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #00000;
  ${down("sm")} {
    font-size: 17px;
    line-height: 21px;
    margin-left: 10px;
  }
`;

const Type = styled(Typography)`
  width: 110.78px;
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #878787;
  border: 0.5px solid #878787;
  border-radius: 25px;
  margin-left: 10px;
  ${down("sm")} {
    font-size: 12.5px;
    line-height: 130%;
    letter-spacing: 0.01em;
    font-weight: 500;
    height: 20px;
    width: 80px;
  }
`;

const TwistedImg = styled(Box)`
  ${down("sm")} {
    width: 330px;
    height: 409px;
    margin-left: 20px;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export default function ContortionsArtworksGallery({
  name,
  createdBy,
  type,
  imgUrl,
}) {
  return (
    <>
      <Box>
        <TwistedTitle>{name}</TwistedTitle>
        <TwistedWrapper>
          <CreatedBy>{createdBy}</CreatedBy>
          <Type>{type}</Type>
        </TwistedWrapper>
        <Flex>
          <Box
            marginTop={{ _: "17px", lg: "32px" }}
            style={{
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <TwistedImg>
              <Image src={imgUrl} width="497px" height="595px" />
            </TwistedImg>
          </Box>
        </Flex>
      </Box>
      <ContortionsItemBuy />
    </>
  );
}
