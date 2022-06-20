import Link from "next/link";
import React from "react";
import { Routes } from "types/routeTypes";
import { Box, Typography } from "root/components/design-system";
import { down } from "styled-breakpoints";
import styled from "styled-components";
import ContortionsIconSocial from "./ContortionsIcons/ContortionsIconSocial";

const AboutWrapper = styled(Box)`
  position: relative;
  ${down("sm")} {
    display: absolute;
    background-image: linear-gradient(180deg, #FFFFFF 5.21%, rgba(217, 217, 217, 0) 59.37%, rgba(255, 255, 255, 0.761062) 93.23%)
    ,url("https://cdn.sanity.io/images/o95gyw7q/production/bb1021c126ef8992369780f39d3fd5c4015a99ee-375x502.png");
    }
  }
  height: 500px;
`;

const LeoTItle = styled(Typography)`
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

const AboutTitle = styled(Typography)`
  font-family: "Rigton Variable";
  font-style: italic;
  font-weight: 275;
  font-size: 32px;
  line-height: 115%;
  color: #b7b7b7;
  text-align: right;
  margin-top: 105px;
  margin-right: 90px;
  ${down("sm")} {
    font-size: 30px;
    text-align: center;
    margin-left: 85px;
    margin-top: 110px;
  }
`;

const IIIBackground = styled(Typography)`
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
    margin-left: 85px;
    margin-top: 22px;
  }
`;

const AboutDesc = styled(Typography)`
  font-family: "ABCDiatype";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.01em;
  color: #00000;
  margin-top: 10px;
  ${down("sm")} {
    font-size: 14px;
    text-align: center;
    width: 331px;
    margin-left: 17px;
    line-height: 19px;
  }
`;

const Socials = styled(Typography)`
  font-family: Rigton Variable;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: red;
  margin-top: 35px;
  a {
    color: #b7b7b7;
    margin-left: 10px;
    margin-right: 30px;
    margin-top: 5px;
    text-decoration: none;
  }
  ${down("sm")} {
    display: none;
  }
`;

export default function ContortionsAbout() {
  return (
    <Box height={{ _: "750px" }}>
      <IIIBackground>III</IIIBackground>
      <LeoTItle>LEO CALLIARD</LeoTItle>
      <AboutTitle>About</AboutTitle>
      <AboutWrapper>
        <AboutDesc>
          <Box>
            Artist Leo Caillard toys with our relationship with time. Through a
            blend of different periods and anachronism he prompts us to reflect
            on the present in relation to our past.
          </Box>
          <br />
          <Box>
            Inspired by science and the concerns of our contemporary society, he
            invites us to take a fresh look at our era, open to history, in
            order to rethink our future.
          </Box>
          <br />
          <Box>
            Leo Caillard was born in Paris, France in 1985. He belongs to this
            new generation of artists associated with the significant changes
            that have been taking place since the 2000s with the dawn of the
            digital age and the new concerns of societies.
          </Box>
        </AboutDesc>
        <Socials>
          <ContortionsIconSocial />
          <Link href={Routes.HOMEPAGE}>
            <a>Website</a>
          </Link>
          {/* Create link to instagram */}
          <ContortionsIconSocial />
          <Link href={Routes.HOMEPAGE}>
            <a>Instagram</a>
          </Link>
          {/* Create link to Website */}
        </Socials>
      </AboutWrapper>
    </Box>
  );
}
