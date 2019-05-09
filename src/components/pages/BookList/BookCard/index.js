import React from "react";

import styled from "styled-components";

import { Card, Icon } from "antd";

const { Meta } = Card;

const BookCard = ({ title, author, publisher, imageLink, price, isbn, description, link, store }) => (
  <StyledCard
    title={title}
    style={{ width: 250, marginBottom: 20 }}
    cover={<img src={imageLink} alt="BookImg" />}
    actions={[<Icon type="shopping-cart" />]}
  >
    <Meta title={author} description={decodeURIComponent(publisher)} />
  </StyledCard>
);

const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default BookCard;
