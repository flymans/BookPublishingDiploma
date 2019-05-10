import React, { Component } from 'react';

import { Form, Input, Select } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

class SearchInput extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.searchBooks(
      this.props.form.getFieldsValue().search,
      this.props.form.getFieldsValue().searchBy
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Label>Искать по:</Label>
        <Form.Item style={{ marginRight: 10, marginBottom: 0 }}>
          {getFieldDecorator('searchBy', {initialValue: 'name'})(
            <StyledSelect
              size="large"
            >
              <Select.Option value="name">Названию</Select.Option>
              <Select.Option value="author">Автору</Select.Option>
              <Select.Option value="publisher">Издателю</Select.Option>
            </StyledSelect>
          )}
         </Form.Item>
        <Form.Item style={{ flexGrow: 1, marginBottom: 0 }}>
          {getFieldDecorator('search')(
            <Search
              size="large"
              placeholder="Введите текст для поиска..."
            />
          )}
         </Form.Item>
      </StyledForm>
    );
  }
}

const Label = styled.h4`
  align-self: center;
  margin-bottom: 0px;
  margin-right: 5px;
`;

const StyledSelect = styled(Select)`
  width: 200px;
`;

const StyledForm = styled(Form)`
  margin-top: 20px;
  display: flex;
  align-content: flex-end;
`;

export default Form.create({})(SearchInput);
