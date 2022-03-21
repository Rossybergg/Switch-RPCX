import React from 'react';
import { CardProps } from './Card.types';
import { StyledCard } from './Card.styles';

export const Card = (props: CardProps) => {
  const { imageSrc, onClick } = props;

  return <StyledCard alt="game" src={imageSrc} onClick={onClick} />;
};
