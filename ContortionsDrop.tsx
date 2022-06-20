import { Container, Box } from "root/components/design-system";
import React from "react";
import ContortionsHeader from "root/modules/Drop/Contortions/ContortionsHeader";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import ContortionsTheSculpture from "./ContortionsTheSculpture";
import ContortionsTheArtworks from "./ContortionsTheArtworks";
import ContortionsAbout from "./ContortionsAbout";

const LeftSection = styled(Box)`
  width: 600px;
`;

const RightSection = styled(Box)`
  width: 840px;
  background: blue;
  ${down("sm")} {
    width: 0px;
  }
`;

const DropLayout = styled(Box)`
  display: flex;
  width: 1440px;
  ${down("sm")} {
    width: 375px;
  }
  margin: 0 auto;
`;

export default function ContortionsDrop() {
  return (
    <Container fullWidth>
      <DropLayout>
        <LeftSection>
          <ContortionsHeader />
          <ContortionsTheSculpture />
          <ContortionsTheArtworks />
          <ContortionsAbout />
        </LeftSection>

        <RightSection />
      </DropLayout>
    </Container>
  );
}
