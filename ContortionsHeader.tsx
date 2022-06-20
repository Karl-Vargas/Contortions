import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Box, Typography, Flex } from "root/components/design-system";
import ContortionsIconHeader from "./ContortionsIcons/ContortionsIconHeader.";

const HeaderWrapper = styled(Box)`
  ${down("sm")} {
    background-image: linear-gradient(
        360deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      url("https://cdn.sanity.io/images/o95gyw7q/production/2b543fadd44978f951cc8270091c43c474677014-375x775.png");
    height: 600px;
  }
`;

const TypesWrapper = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  ${down("sm")} {
    margin-left: 60px;
    margin-right: 60px;
  }
`;

const DissrupTitle = styled(Typography)`
  font-family: ABCDiatype;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 90%;
  opacity: 0.55;
  text-align: center;
  margin-bottom: 17px;
  ${down("sm")} {
    font-size: 8px;
  }
`;

const PresentsDesc = styled(Typography)`
  font-family: ArthemysDisplay-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  text-align: center;
  text-transform: uppercase;
  color: #00000;
  margin-bottom: 10px;
  ${down("sm")} {
    font-size: 20px;
  }
`;

const ContortionsTitle = styled(Typography)`
  font-family: "Gosna";
  font-weight: 400;
  font-size: 87px;
  line-height: 76.56px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  text-align: center;
  ${down("sm")} {
    font-size: 52px;
    line-height: 35px;
  }
`;

const MMXXII = styled(Typography)`
  font-family: "ArthemysDisplay-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 28px;
  text-align: center;
  color: #00000;
  ${down("sm")} {
    font-size: 20px;
  }
`;

const DigitalTitle = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: normal;
  font-weight: 100;
  font-size: 12px;
  line-height: 141%;
  text-align: center;
  border: 0.5px solid #5d5d5d;
  border-radius: 25px;
  width: 80px;
  color: #5d5d5d;
  margin: 5px;
  ${down("sm")} {
    font-size: 8px;
    width: 50px;
    margin-top: 8px;
  }
`;
const PhygitalTitle = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: normal;
  font-weight: 100;
  font-size: 12px;
  line-height: 141%;
  text-align: center;
  border: 0.5px solid #5d5d5d;
  border-radius: 25px;
  color: #5d5d5d;
  width: 80px;
  margin: 5px;
  ${down("sm")} {
    font-size: 8px;
    width: 50px;
    margin-top: 8px;
  }
`;

const InspiredDesc = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: normal;
  font-weight: 275;
  font-size: 20px;
  line-height: 115%;
  text-align: center;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #5e5e5e;
  ${down("sm")} {
    font-size: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Number1 = styled(Box)`
  font-family: ArthemysDisplay-Regular;
  line-height: 121%;
  font-size: 72px;
  margin-left: 50px;
  ${down("sm")} {
    font-size: 42px;
  }
`;
const Number2 = styled(Box)`
  font-family: ArthemysDisplay-Regular;
  line-height: 121%;
  font-size: 72px;
  margin-left: 30px;
  ${down("sm")} {
    font-size: 42px;
    margin-left: 10px;
  }
`;
const Number3 = styled(Box)`
  font-family: ArthemysDisplay-Regular;
  line-height: 121%;
  font-size: 72px;
  margin-right: 30px;
  ${down("sm")} {
    font-size: 42px;
  }
`;

const NumbersDesc = styled(Typography)`
  font-family: Rigton Variable;
  font-size: 16px;
  color: #5e5e5e;
  margin-right: 10px;
  ${down("sm")} {
    font-size: 9.5px;
    line-height: 14px;
    margin-left: 20px;
    margin-right: 21px;
  }
`;

const Types = styled(Typography)`
  font-family: Rigton Variable;
  font-size: 12px;
  color: #5e5e5e;
  margin-right: 45px;
  margin-left: 30px;
  margin-bottom: 10px;
  ${down("sm")} {
    font-size: 9.5px;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 216px;
  margin-top: 30px;
  ${down("sm")} {
    margin-bottom: 46px;
    display: relative;
  }
`;

function Icon() {
  return (
    <IconWrapper>
      <ContortionsIconHeader />
    </IconWrapper>
  );
}

// ***THE SCULPTURE SECTION***

const SculptureTItle = styled(Typography)`
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
    line-height: 80%;
    letter-spacing: -0.04em;
    text-align: center;
  }
`;

const SculpPhygitalTitle = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: italic;
  font-weight: 275;
  font-size: 32px;
  line-height: 115%;
  color: #b7b7b7;
  text-align: right;
  margin-right: 60px;
  margin-top: 105px;
  ${down("sm")} {
    font-size: 30px;
    text-align: center;
    margin-left: 60px;
    margin-top: 110px;
  }
`;

const IBackground = styled(Typography)`
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
    margin-left: 155px;
    margin-top: 15px;
  }
`;
const SculptureDesc = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #00000;
  margin-top: 10px;
  width: 482px;
  ${down("sm")} {
    font-family: "Rigton Variable";
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    line-height: 18px;
    width: 330px;
    text-align: center;
    margin-left: 25px;
  }
`;

export default function ContortionsHeader() {
  return (
    <HeaderWrapper>
      <DissrupTitle>Disrrup</DissrupTitle>
      <PresentsDesc>
        Leo Caillaird <br /> PRESENTS:
      </PresentsDesc>
      <ContortionsTitle>CONTORTIONS</ContortionsTitle>
      <TypesWrapper>
        <DigitalTitle>DIGITAL</DigitalTitle>
        <MMXXII>MMXXII</MMXXII>
        <PhygitalTitle>PHYGITAL</PhygitalTitle>
      </TypesWrapper>
      <InspiredDesc>
        INSPIRED BY THE CLASSICAL SCUPLTURE OF ANCIENT GREECE, LEO
        CAILLARD&apos;S &apos;CONTORTIONS&apos; SERIES DISTORS THE MATERIAL
        PROPERTIES OF MARBLE USING PHYSICAL CRAFTMANSHIP AND DIGITAL SIMULATION
      </InspiredDesc>
      <Icon />
      <Flex justifyContent="space-between">
        <Number1>I</Number1>
        <Number2>II</Number2>
        <Number3>III</Number3>
      </Flex>
      <Flex justifyContent="space-between">
        <NumbersDesc>THE SCULPTURE</NumbersDesc>
        <NumbersDesc>THE ARTWORKS</NumbersDesc>
        <NumbersDesc>LEO CAILLARD</NumbersDesc>
      </Flex>
      <Flex justifyContent="space-between">
        <Types>(PHYGITAL)</Types>
        <Types>(DIGITAL)</Types>
        <Types>(ABOUT)</Types>
      </Flex>
      <IBackground>I</IBackground>
      <SculptureTItle>THE SCULPTURE</SculptureTItle>
      <SculpPhygitalTitle>Phygital</SculpPhygitalTitle>
      <Box height={{ _: "473px" }}>
        <SculptureDesc>
          A beautiful, physics-defying marble sculpture, inspired by the mental
          anguish of the great masters of old. This physical masterpiece will be
          shipped to any destination in the world, boxed in a reinforced fine
          art crate.
        </SculptureDesc>
      </Box>
    </HeaderWrapper>
  );
}
