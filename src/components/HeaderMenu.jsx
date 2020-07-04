import React, { useContext } from 'react';
import {Box, Text} from 'rebass';
import { HashLink } from 'react-router-hash-link';
import styled from '@emotion/styled';
import AppContext from '../Context/AppContext';

const HeaderUl = styled.ul`
  list-style: none;
  text-align: center;
  margin-left: 0;
`;

const HeaderList = styled.li`
  margin-left: 30px;
  display: inline;
`;


const Anchor = styled(HashLink)`
  text-decoration: none;
  cursor: pointer;
`;

const StyledBox = styled(Box)`
  display : ${(props) => props.type ? 'block' : 'none'};
  position : fixed;
  height: 250px;
  top: 71px;
  left: 0px;
  z-index: 2;
  width: 100%;
  overflow: scroll;
`;

export default () => {
  const { state } = useContext(AppContext);
  return (
    <StyledBox bg="rgba(237, 231, 240, 1)" textAlign="center" type={state}>
      <HeaderUl>
        <HeaderList>
          <Anchor to="/#about_me">
            <Text
              fontSize={4}
              variant="header"
              as="p"
            >
              About me
            </Text>
          </Anchor>
        </HeaderList>
        <HeaderList>
          <Anchor to="/#skill">
            <Text
              fontSize={4}
              variant="header"
              as="p"
            >
              Skill
            </Text>
          </Anchor>
        </HeaderList>
        <HeaderList>
          <Anchor to="/#work">
            <Text
              fontSize={4}
              variant="header"
              as="p"
            >
              Work
            </Text>
          </Anchor>
        </HeaderList>
      </HeaderUl>
  </StyledBox>
  );
};