import React from "react";

import styled from "styled-components";

import { Card, Icon } from "antd";

const { Meta } = Card;

const escape = str => str.replace(/amp;|&amp;/g, '').replace(/quot;|&quot;/g, '"');

const BookCard = ({ title, author, publisher, imageLink, price, isbn, description, link, store }) => (
  <StyledCard
    actions={[<a href={link} target="_blank" rel="noopener noreferrer"><Icon type="shopping-cart" /></a>]}
  >
    <Wrapper>
      <ImageContainer>
        <img style={{ width: 200, height: 315}} src={imageLink} alt="BookImg" />
      </ImageContainer>
      <div>
        <h2>{escape(title)}</h2>
        <Meta title={author} description={`Издательство: ${escape(publisher)}`} />
        <Description>{escape(description)}</Description>
        <p>Магазин: {store}, ISBN: {isbn}</p>
        <p>Цена: <strong>{price}</strong> ₽</p>
      </div>
    </Wrapper>
  </StyledCard>
);

const Wrapper = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  margin-right: 20px;
`;

const Description = styled.p`
  margin-top: 20px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default BookCard;
