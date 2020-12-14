import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from 'rebass';
import styled from '@emotion/styled';
import Layout from '../Layout';
import Head from '../components/template/Head';
import Container from '../lib/Container';
import mri from '../img/mri-2813911.jpg';
import linear from '../img/linear.jpg';
import coil from '../img/ni.png'

const HeadingContent = () => (
  <Heading as="h1" variant="title">
    研究内容
  </Heading>
);

const Underline = styled.p`
  content: '';
  position: absolute;
  top: 85px;
  left: 0px;
  width: 70px;
  height: 2px;
  background-color: rgba(96, 0, 155, 0.8);
`;

const Circle = styled(Text)`
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(96, 0, 155, 0.8);
`;

const StyledUl = styled.ul`
  margin: 0;
`;

export default () => (
  <>
    <Layout>
      <Head content={HeadingContent()} height="500px"/>
      <Container>
        <Box py="30px">
        　<Heading variant="base" fontSize={['18px', 4, 4]}>
            私は超電導電力貯蔵装置への応用を目的とした新構造コイルについての研究をしています。
            <br />
            あまり知られていない分野なので、難しいかもしれませんが、読んで頂けたら幸いです。
          </Heading>
        </Box>
        <Box py="30px" sx={{position: 'relative'}}>
          <Heading variant="base" fontSize={['18px', 4, 4]} py="20px">
            超電導とは？
          </Heading>
          <Underline />
          <Text　variant="base" fontSize={2}>
            超電導とは、特殊な素材を極低温まで冷却することで、抵抗がゼロになる現象のことです。それにより、大きな電流を流すことや大きな磁場を発生させることができます。
            <br/>
          </Text>
          <Heading
            as="h4"
            variant="base"
            fontSize={['18px', 3, 3]}
            py="10px"
            pl="20px"
          >
            代表的な応用例
          </Heading>
          <Circle sx={{top: ['213px','175px','175px']}}/>
          <Flex flexWrap="wrap">
            <Box width={[1 / 2]} pr="10px">
              <Text variant="base" fontSize={['17px', 3, 3]} fontWeight="bold" pb="10px">
                MRI
              </Text>
              <Image src={mri} height={['200px','300px','300px']} width={['300px','400px','400px']}/>
            </Box>
            <Box width={[1 / 2]}>
              <Text variant="base" fontSize={['17px', 3, 3]} fontWeight="bold" pb="10px">
                リニアモーターカー
              </Text>
              <Image src={linear} height={['200px','300px','300px']} width={['300px','400px','400px']}/>
            </Box>
          </Flex>
        </Box>
        <Box py="30px" sx={{position: 'relative'}}>
          <Heading variant="base" fontSize={['18px', 4, 4]} py="20px">
            超電導電力貯蔵装置（SMES）とは？
          </Heading>
          <Underline />
          <Text　variant="base" fontSize={2}>
            超電導電力貯蔵装置（SMES）とは、超電導を利用して電気エネルギーを磁気エネルギーとして貯蔵できる電力貯蔵装置です。
            <br/>
          </Text>
        </Box>
        <Box>
          <Heading color="red" as="span"　fontSize={['18px', 3, 3]}>長所</Heading>
          <StyledUl>
            <li>
              繰り返し運転に制限がない（長寿命）
            </li>
            <li>
              大電力の瞬時応答が可能
            </li>
          </StyledUl>
          <Heading color="blue" as="span"　fontSize={['18px', 3, 3]}>短所</Heading>
          <StyledUl>
            <li>
              電力貯蔵密度が極めて小さい
            </li>
          </StyledUl>
        </Box>
        <Box py="30px" sx={{position: 'relative'}}>
          <Heading variant="base" fontSize={['18px', 4, 4]} py="20px">
            新構造コイルについて
          </Heading>
          <Underline />
          <Text　variant="base" fontSize={2}>
            新構造コイルは、超電導線材を絶縁層を施さずに巻線したコイルです。
            <br/>
          </Text>
          <Box display="flex" justifyContent="center">
          <Image src={coil} py="30px" width={['200px','350px','400px']} height={['200px','350px','400px']}/>
          </Box>
        </Box>
        <Box>
          <Heading color="red" as="span"　fontSize={['18px', 3, 3]}>絶縁層がないことによるメリット</Heading>
          <StyledUl>
            <li>
              事故時に電流が隣の層に移動できる　→　熱的に安定
            </li>
            <li>
             小型化できる　→　高電流密度化
            </li>
          </StyledUl>
          <Heading color="blue" as="span"　fontSize={['18px', 3, 3]}>絶縁層がないことによるメリット</Heading>
          <StyledUl>
            <li>
              周方向だけでなく径方向にも電流が流れる
            </li>
          </StyledUl>
        </Box>
        <Text varinat="base" fontWeight="bold" fontSize={['18px', 3, 3]} py="40px">
          この新構造コイルをSMESに応用することで、高電流密度化による貯蔵密度の向上が可能であると考えられている
        </Text>
        
      </Container>
    </Layout>
  </>
)