import React from "react";
import Image from "next/image";
import { down } from "styled-breakpoints";
import { Box, Flex, Typography, Visible } from "root/components/design-system";
import styled from "styled-components";
import Details from "./ContortionsDetails";
import ContortionsDetailsIcon from "./ContortionsIcons/ContortionsDetailsIcon";

const SculptureWrapper = styled(Box)`
  ${down("sm")} {
    display: relative;
  }
`;

const TwistedVenus = styled(Typography)`
  font-family: "ArthemysDisplay-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 72px;
  color: #00000;
  border: 0.2px solid #00000;
  margin-top: 5px;
  margin-bottom: 44px;
  transform: uppercase;
  ${down("sm")} {
    font-size: 46px;
    line-height: 46px;
    letter-spacing: 0.02em;
    margin-top: 70px;
    margin-bottom: 9px;
    margin-left: 10px;
  }
`;

const TwistedWrapper = styled(Box)`
  display: flex;
  height: 25px;
  margin-top: 10px;
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
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.01em;
    font-weight: 500;
    height: 20px;
    width: 80px;
  }
`;

const Border = styled(Box)`
  width: 542px;
  height: 0px;
  left: 32px;
  top: 1960px;
  border: 1px solid #bababa;
  margin-top: 29px;
  margin-bottom: 25px;
  ${down("sm")} {
    display: none;
  }
`;

const TwistedDesc = styled(Box)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #00000;
  margin-right: 50px;
  ${down("sm")} {
    font-size: 14px;
    line-height: 18px;
    font-weight: 300;
    margin-top: 22px;
    margin-left: 10px;
  }
`;

const ShowDetails = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #00000;
  margin-top: 50px;
  text-decoration: underline;
  text-decoration-color: 1px solid #bababa;
  ${down("sm")} {
    display: none;
  }
`;

const HideDetails = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #00000;
  margin-top: 50px;
  text-decoration: underline;
  text-decoration-color: 1px solid #bababa;
  margin-left: 20px;
`;

const InfoNFT = styled(Typography)`
  display: flex;
  justify-content: space-evenly;
  font-family: "Rigton Variable";
  font-style: normal;
  font-size: 16px;
  line-height: 196.8%;
  letter-spacing: 0.01em;
  color: #6d6d6d;
  ${down("sm")} {
    margin-top: 20px;
  }
`;

const ThumbnailWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  ${down("sm")} {
    display: none;
  }
`;

const BigImg = styled(Box)`
  ${down("sm")} {
    margin-left: 10px;
    margin-top: 200px;
  }
`;

export default function ContortionsTheSculpture() {
  return (
    <SculptureWrapper>
      <Flex>
        <BigImg>
          <Box style={{ borderRadius: "10px", overflow: "hidden" }}>
            <Image
              src="https://cdn.sanity.io/images/o95gyw7q/production/5cff165df3e36ee662d6419ac8b10d30ef1699d6-850x780.png"
              width="357px"
              height="495px"
            />
          </Box>
          {/* <Visible sm>
            <MobileArtworkInfo artwork={selectedArtwork} />
          </Visible> */}
        </BigImg>

        <ThumbnailWrapper>
          <Box>
            <Image
              src="https://cdn.sanity.io/images/o95gyw7q/production/9d51198d586e8bbb1491b4e35fbe781dab58afa3-120x161.png"
              width="120"
              height="161"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.sanity.io/images/o95gyw7q/production/8d7eabf68637350443928314a1488644ef3b1309-120x161.png"
              width="120"
              height="161"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.sanity.io/images/o95gyw7q/production/72de26b2de14a679e3e83551df12ced2711d28b4-120x161.png"
              width="120"
              height="161"
            />
          </Box>
        </ThumbnailWrapper>
      </Flex>
      <TwistedVenus>Twisted Venus</TwistedVenus>
      <TwistedWrapper>
        <CreatedBy>Created by Leo Caillard</CreatedBy>
        <Type>Phygital</Type>
      </TwistedWrapper>
      <Border />
      <TwistedDesc>
        Statue 001 depicts the bust of Hercules, distorted to reflect the mental
        anguish endured by the Grecian hero as a consequence of his colossal
        undertakings. The phygital artwork includes both the digital artwork and
        a 1 of 1 physical bust, hand carved by Leo in his workshop.
      </TwistedDesc>
      <ShowDetails>Show Details</ShowDetails>
      <Visible sm>
        <HideDetails>Hide Details</HideDetails>
        <Details name="Dimensions" description="(H) 46cm (W) 28cm (D) 19cm." />
        <Details name="Weight" description="55kg (including packaging)." />
        <Details name="Material" description="White corrugated marble." />
        <Details
          name="Shipping"
          description="Shipped in a reinforced wooden crate."
        />
      </Visible>
      <InfoNFT>
        <span>Phygital Artwork </span>
        <ContortionsDetailsIcon />
        <span>Auction</span>
        <ContortionsDetailsIcon />
        <span>1 of 1 Edition</span>
      </InfoNFT>
    </SculptureWrapper>
  );
}
