import React from "react";
import { Box, Typography } from "root/components/design-system";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import ContortionsArtworksGallery from "./ContortionsArtworksGallery";

const TheArtworksTItle = styled(Typography)`
  position: relative;
  font-family: "ArthemysDisplay-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 92px;
  line-height: 80%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #00000;
  top: 105px;
  ${down("sm")} {
    font-size: 60px;
    text-align: center;
    line-height: 90%;
  }
`;

const DigitalTitle = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: italic;
  font-weight: 275;
  font-size: 32px;
  line-height: 115%;
  color: #b7b7b7;
  text-align: right;
  margin-right: 80px;
  margin-top: 100px;
  ${down("sm")} {
    font-size: 30px;
    text-align: center;
    margin-left: 60px;
    margin-top: 110px;
  }
`;

const IIBackground = styled(Typography)`
  position: absolute;
  font-family: "ArthemysDisplay-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 262px;
  line-height: 121%;
  color: rgba(186, 186, 186, 0.25);
  ${down("sm")} {
    font-size: 192px;
    text-align: center;
    margin-left: 120px;
    margin-top: 22px;
  }
`;

const ArtworksDesc = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.01em;
  width: 542px;
  color: #00000;
  margin-top: 10px;
  ${down("sm")} {
    font-size: 14px;
    text-align: center;
    width: 331px;
    margin-left: 17px;
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

export default function ContortionsTheArtworks() {
  return (
    <>
      <Box height={{ _: "473px" }}>
        <IIBackground>II</IIBackground>
        <TheArtworksTItle>THE ARTWORKS</TheArtworksTItle>
        <DigitalTitle>Digital</DigitalTitle>
        <ArtworksDesc>
          A collection of four digital artworks, each available in an open
          edition of 10. The Contortions digital series reflects on the
          evolution of the hero archetype as it adapts to the contemporary
          milieu.
        </ArtworksDesc>
      </Box>
      <ContortionsArtworksGallery
        name="Twisted Lucius"
        createdBy="Created by Leo Caillard"
        type="DIGITAL"
        imgUrl="https://cdn.sanity.io/images/o95gyw7q/production/0c3e49f1579e3c03c247b246b364bb9dc19c11ec-480x595.png"
      />
      <ContortionsArtworksGallery
        name="Twisted Hercules"
        createdBy="Created by Leo Caillard"
        type="DIGITAL"
        imgUrl="https://cdn.sanity.io/images/o95gyw7q/production/e233cd21ac7a04e5b276b63a2e9f77cfbd020105-480x595.png"
      />
      <ContortionsArtworksGallery
        name="Twisted Aphrodite"
        createdBy="Created by Leo Caillard"
        type="DIGITAL"
        imgUrl="https://cdn.sanity.io/images/o95gyw7q/production/8505105356acb58fe7ad2b367d6ed319f9582535-480x595.png"
      />
      <Border />
    </>
  );
}
