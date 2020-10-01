import React from 'react';
import {
  Box,
  Heading,
  Image,
  Flex,
} from 'rebass';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Panel from './Panel';
import html5 from '../img/html5.png';
import css3 from '../img/css3.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
import jquery from '../img/jquery.png';
import python from '../img/python.png';
import node from '../img/node.png';
import docker from '../img/docker.png';
import Go from '../img/go.png';
import typescript from '../img/typescript.png'

const IconText = styled(Box)`
  display: inline;
  color: orange;
`;
 
const skillItems = [
  { 
    id: 'skill01',
    language: 'html5',
    star: 4,
  },
  {
    id: 'skill02',
    language: 'css3',
    star: 4,
  },
  {
    id: 'skill03',
    language: 'javascript',
    star: 4,
  },
  {
    id: 'skill04',
    language: 'react',
    star: 4,
  },
  {
    id: 'skill05',
    language: 'typescript',
    star: 3.5,
  },
  {
    id: 'skill06',
    language: 'jquery',
    star: 3,
  },
  {
    id: 'skill07',
    language: 'node',
    star: 2.5,
  },
  {
    id: 'skill08',
    language: 'sass',
    star: 2,
  },
  {
    id: 'skill09',
    language: 'Go',
    star: 2,
  },
  {
    id: 'skill10',
    language: 'docker',
    star: 1.5,
  },
  {
    id: 'skill11',
    language: 'python',
    star: 0.5,
  },
];

const Icon = (lang) => (
  <>
    { lang === "html5" && <Image src={html5} height={['150px','200px','200px']} /> }
    { lang === "css3" && <Image src={css3} height={['150px','200px','200px']} />}
    { lang === "javascript" && <Image src={javascript} height={['150px','200px','200px']} />}
    { lang === "react" && <Image src={react}height={['150px','200px','200px']} />} 
    { lang === "sass" && <Image src={sass} height={['150px','200px','200px']} />}
    { lang === "jquery" && <Image src={jquery} height={['150px','200px','200px']} />}
    { lang === "python" && <Image src={python} height={['150px','200px','200px']} />}
    { lang === "node" && <Image src={node} height={['150px','200px','200px']} />}
    { lang === "docker" && <Image src={docker} height={['150px','200px','200px']} />}
    { lang === "Go" && <Image src={Go} height={['150px','200px','200px']} />}
    { lang === "typescript" && <Image src={typescript} height={['150px','200px','200px']} />}
  </>
);

const Content = (number) => {
  const stars =[];
  for(let i = 1; i <= 5; i++) {
    if(number - i >= 0) {
    stars.push(<IconText key={i} as="p" fontSize={[3, 3, 5]}><FontAwesomeIcon icon={[ 'fas', 'star' ]} /></IconText>);
    } else if (number - i > -1) {
      stars.push(<IconText key={i} as="p" fontSize={[3, 3, 5]}><FontAwesomeIcon icon={[ 'fas', 'star-half-alt' ]} /></IconText>);
    } else {
      stars.push(<IconText key={i} as="p" fontSize={[3, 3, 5]}><FontAwesomeIcon icon={[ 'far', 'star' ]} /></IconText>);
    }
  }
  return (
    <>{stars}</>
  )
}

export default () => (
  <Box width="100%" id="skill">
    <Heading variant="heading" py="100px">Skills</Heading>
    <Flex flexWrap="wrap">
      { skillItems.map(item => (
        <Box key={item.id} width={[1 / 2, 1 / 2, 1 / 3]}>
          <Panel
            image={Icon(item.language)}
            content={Content(item.star)}
            padding={3}
            width={['150px','300px','250px']}
          />
        </Box>
      ))}
    </Flex>
  </Box>
);



    