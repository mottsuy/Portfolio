import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Box } from 'rebass';
import AppContext from '../Context/AppContext';

const Top = styled.span`
  background-color: rgba(96, 0, 155, 0.5);
  width: 35px;
  height: 3px;
  margin: 0 auto;
  position: relative;
  top: ${(props) => props.isOpen? '-13px' : 0};
  left: 0;
  borderRadius: 2px;
  transition: all .4s;
  transform: ${(props) => props.isOpen ? 'translateY(20px) rotate(-45deg)' : ''};
  boxSizing: border-box;
  display: block;
`;

const Middle = styled.span`
  background-color: rgba(96, 0, 155, 0.5);
  width: 35px;
  height: 3px;
  margin: 0 auto;
  position: relative;
  top: 4px;
  left: 0;
  borderRadius: 2px;
  opacity: ${(props) => props.isOpen && 0};
  boxSizing: border-box;
  display: block;
`;

const Bottom = styled.span`
  background-color: rgba(96, 0, 155, 0.5);
  width: 35px;
  height: 3px;
  margin: 0 auto;
  position: relative;
  top:  ${(props) => props.isOpen ? '21px' : '9px'};
  left: 0;
  borderRadius: 2px;
  transition: all .4s;
  transform: ${(props) => props.isOpen ? 'translateY(-20px) rotate(45deg)' : ''};
  boxSizing: border-box;
  display: block;
`;


export default () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Box
      onClick={() => dispatch({ type: 'CLICK' })}
      mt="23px"
      textAlign="center"
      height="25px"
      sx={{
        position: 'absolute',
        top: '5px',
        right: '2.5%',
        display: ['block', 'block', 'none'],
      }}
    >
      <Top isOpen={state} />
      <Middle isOpen={state} />
      <Bottom isOpen={state} />
    </Box>
  );
};