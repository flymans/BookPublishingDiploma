import React, { Component } from 'react';

import { Form, Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

class SearchInput extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.searchBooks(this.props.form.getFieldsValue().search);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('search')(
            <StyledInput
              size="large"
              placeholder="Поиск книги по названию..."
            />
          )}
         </Form.Item>
      </Form>
    );
  }
}

const StyledInput = styled(Search)`
  margin-top: 20px;
`;

export default Form.create({})(SearchInput);
