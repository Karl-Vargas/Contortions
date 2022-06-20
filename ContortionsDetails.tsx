import React from "react";
import { Box } from "root/components/design-system";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const Details = styled(Box)`
  ${down("sm")} {
    font-family: ABCDiatype;
    font-size: 14px;
    line-height: 18px;
    margin-left: 30px;
    span {
      font-weight: 300;
    }
  }
`;

export default function ContortionsDeatils({ name, description }) {
  return (
    <Box>
      <Details>
        <ul>
          <li>
            {name}: <span>{description}</span>
          </li>
        </ul>
      </Details>
    </Box>
  );
}
