import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { CardProps } from './Card.types';
import { StyledCard } from './Card.styles';

export const Card = (props: CardProps) => {
  const { title, imageSrc, image, onClick } = props;

  return (
    <Tooltip title={title}>
      <StyledCard
        alt="game"
        src={imageSrc}
        onClick={() => {
          onClick(title, image);
        }}
      />
    </Tooltip>
  );
};
