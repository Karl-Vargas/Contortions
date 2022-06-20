import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Box, Flex, Button, Visible } from "root/components/design-system";

const ValueETH = styled(Box)`
  font-family: ABCDiatype;
  font-style: normal;
  font-size: 32px;
  margin-right: 20px;
  ${down("sm")} {
    font-size: 18.6px;
    line-height: 26px;
    margin-left: 20px;
  }
`;

const ConvertValue = styled(Box)`
  font-family: ABCDiatype;
  font-style: normal;
  font-size: 16px;
  color: #686868;
  margin-top: 5px;
  ${down("sm")} {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.015em;
    margin-left: 30px;
    width: 50px;
  }
`;

const BuyNow = styled(Box)`
  margin-left: 180px;
  ${down("sm")} {
    width: 150px;
  }
`;

const QuantityAvailable = styled(Box)`
  font-family: ABCDiatype;
  font-style: normal;
  font-size: 16px;
  color: #686868;
  margin-top: 5px;
  ${down("sm")} {
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.015em;
    margin-left: 15px;
  }
`;

const MobileButton = styled(Box)`
  margin-right: 15px;
`;

export default function ContortionsItemBuy() {
  return (
    <>
      <Flex>
        <Box>
          <ValueETH>ValueETH </ValueETH>
          <ConvertValue>1,500 USD</ConvertValue>
        </Box>
        <BuyNow>
          <Visible xl>
            <Button variant="medium" color="black">
              Buy Now
            </Button>
          </Visible>
          <MobileButton>
            <Visible sm>
              <Button variant="small" color="black">
                Sold Out
              </Button>
            </Visible>
          </MobileButton>

          <QuantityAvailable> 8/10 Available</QuantityAvailable>
        </BuyNow>
      </Flex>
    </>
  );
}
