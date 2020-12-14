import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading} from 'rebass';
import profImage from '../../img/8JZywRbNzLMxt2Q1593246887_1593246898.jpg';


export default () => (
    <Box
    height={['1000px', '930px', '930px']}
    width={['280px', '500px', '700px']}
    mx="auto"
    sx={{
      borderRadius: '5px',
      boxShadow: '0px 2px 4px 0px rgba(70,141,219,0.1)',
      backgroundColor: '#fff',
    }}
  >
    <Box pt="20px" display="flex" justifyContent="center"> 
    <Image
      src={ profImage }
      sx={{
        width:'25%',
        borderRadius: '80px',
      }}
    />
    </Box>
    <Box p={['10px', '10px', '20px']}>
      <Heading as="h3" py="20px">Profile</Heading>
      <Box width={['250px','400px','500px']} mx="auto">
        <Text as="p" textAlign="left">名前：　宮本　祐</Text>
        <Text as="p" textAlign="left">生年月日：　1997/10/21</Text>
        <Text as="p" textAlign="left">出身地：　三重県　津市</Text>
        <Text as="p" textAlign="left">趣味：　スポーツ観戦、映画観賞</Text>
        <Heading as="h3" py="20px">History</Heading>
        <Text as="p" textAlign="left" pb="10px">
            2016/03
            <br/>
            栄東高校を卒業
        </Text>
        <Text as="p" textAlign="left" pb="10px">
            2016/04
            <br/>
            早稲田大学 先進理工学部 電気情報生命工学科に入学
        </Text>
        <Text as="p" textAlign="left" pb="10px">
            2018/09
            <br/>
            医療機器に関する研究に興味を持ち、超電導応用研究室に入室
        </Text>
        <Text as="p" textAlign="left" pb="10px">
            2019/08
            <br/>
            株式会社FUTUREWOODSにて,Webエンジニアとして
            <br/>
            長期インターンシップに参加
        </Text>
        <Text as="p" textAlign="left" pb="10px">
            2020/03
            <br/>
            早稲田大学 先進理工学部 電気情報生命工学科を卒業
        </Text>
        <Text as="p" textAlign="left" pb="10px">
            2020/04
            <br/>
            早稲田大学大学院 先進理工学研究科 電気情報生命専攻に入学
        </Text>

      </Box>

    </Box>
  </Box>
)