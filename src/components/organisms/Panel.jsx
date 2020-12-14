import React from 'react';
import { Box } from 'rebass';
import ImagePanel from '../molecules/ImagePanel';
import LinkPanel from '../molecules/LinkPanel';
import NormalPanel from '../molecules/NormalPanel';


export default ({
  image,
  content,
  padding,
  width,
  type,
  href,
}) => {
  const SelectedPanel = () => {
    switch(type) {
      case "image":
        return <ImagePanel image={image} content={content} />;
      case "path":
        return <LinkPanel image={image} content={content} href={href} />;
      case "link":
        return <NormalPanel image={image} content={content} href={href} />
      default:
        break;
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        mb="30%"
        py={padding}
        width={width}
        sx={{
          backgroundColor: 'white',
          boxShadow: '0px 2px 4px 0px rgba(70, 141, 219, 0.1)',
          borderRadius: '13px',
          }}
      >
      <>{SelectedPanel()}</>
      </Box>
    </Box>
  )
};
