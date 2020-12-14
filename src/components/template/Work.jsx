import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
} from 'rebass';
import Panel from '../organisms/Panel';
import mri from '../../img/mri.jpg';
import portfolio from '../../img/portfolio_top.png';
import fvi from '../../img/fvi.png';

const workItems = [
  {
    id: "work01",
    type: 'link',
    img: mri,
    content: "超電導についての研究",
    path: '/study'
  },
  {
    id: "work02",
    type: 'link',
    img: portfolio,
    content: "ポートフォリオ",
    path: '/'
  },
  {
    id: "work03",
    type: "link",
    img: fvi,
    content: "作成した企業HP",
    path: "https://fvi.co.jp/",
  }
  
]

const Img = (img) => (
  <Image src={img} sx={{borderRadius:'13px 13px 0 0'}}/>
);

const Content = (content) => (
  <Text my="auto" color="#000">{content}</Text>

)

export default () => (
  <Box id="work">
    <Heading variant="heading" py="100px">Works</Heading>
    <Flex flexWrap="wrap">
      { workItems.map(item => (
        <Box key={item.id} width={[1, 1 / 2, 1 / 2]}>
          <Panel
            type={item.type}
            image={Img(item.img)}
            content={Content(item.content)}
            padding="0"
            width={['400px', '320px', '400px']}
            href={item.path}
          />
        </Box>
      ))}
    </Flex>
  </Box>
)