import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {Box, Text, Flex} from 'rebass';
import styled from '@emotion/styled';
import Humberger from '../organisms/Humberger';
import HeaderMenu from '../organisms/HeaderMenu';

const HeaderUl = styled.ul`
  list-style: none;
  text-align: end;
  margin-left: 0;
`;

const HeaderList = styled.li`
  margin-left: 30px;
  display: inline;
`;

const HeaderBox = styled(Box)`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999;
`;

const Anchor = styled(HashLink)`
  text-decoration: none;
  cursor: pointer;
`;

export default () => (
  <HeaderBox width={['100%', '100%', '100%']} height="70px" px="3%">
    <Flex height="70px">
      <Box width={[1 / 2]} my="auto">
        <Anchor to="/">
            <Text variant="header" fontSize={[2, 3, 4]} as="p" sx={{display: 'inline'}}>
              Miyamoto'sPortfolio
            </Text>
        </Anchor>
      </Box>
      <Box width={[1 / 2]}>
        <Humberger />
        <HeaderMenu />
        <Box display={['none', 'none', 'block']}>
          <HeaderUl>
            <HeaderList>
              <Anchor to="/#about_me">
                <Text
                  fontSize={[2, 3, 4]}
                  variant="header"
                  as="p"
                  sx={{display: 'inline'}}
                >
                  About me
                </Text>
              </Anchor>
            </HeaderList>
            <HeaderList>
              <Anchor to="/#skill">
                <Text
                  fontSize={[2, 3, 4]}
                  variant="header"
                  as="p"
                  sx={{display: 'inline'}}
                >
                  Skill
                </Text>
              </Anchor>
            </HeaderList>
            <HeaderList>
              <Anchor to="/#work">
                <Text
                  fontSize={[2, 3, 4]}
                  variant="header"
                  as="p"
                  sx={{display: 'inline'}}
                >
                  Work
                </Text>
              </Anchor>
            </HeaderList>
          </HeaderUl>
        </Box>
      </Box>
    </Flex>
  </HeaderBox> 
);
