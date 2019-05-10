import React, { Component } from 'react';

import api from '../../../api';
import { Alert, Spin } from 'antd';
import styled from 'styled-components';

import BookCard from './BookCard';
import SearchInput from './SearchInput';

class BookList extends Component {
  state = {
    items: [],
    loading: false,
  };

  async componentDidMount() {
    
  }

  searchBooks = async (search, searchBy) => {
    this.setState({ loading: true });
    const res = await api.get(`?${searchBy}=${search}`);
    const data = res.data;

    if (data.length === 0) {
      this.setState({
        items: '',
        loading: false,
      });

      return;
    }

    this.setState({
      items: Array.isArray(data) ? data : [data],
      loading: false,
    });
  }

  renderItems = () => {
    if (!this.state.items) return (
      <Alert
        message="Книги не найдены"
        type="info"
        showIcon
        style={{ width: '100%' }}
      />
    );

    return this.state.items.map(book => {
      return (
        <BookCard
          key={book._id}
          title={book.name}
          author={book.author}
          imageLink={book.picture}
          publisher={book.publisher}
          price={book.price}
          isbn={book.ISBN}
          description={book.description}
          link={book.link}
          store={book.store}
        />
    )});
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        <SearchInput
          searchBooks={this.searchBooks}
        />
        <Spin style={{ marginTop: 20 }}size="large" spinning={loading}>
          <List>
            {this.renderItems()}
          </List>
        </Spin>
      </>
    );
  }
}

const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export default BookList;