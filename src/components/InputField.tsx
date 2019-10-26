import React from 'react';
import styled from 'styled-components';

import FormGroup from './FormGroup';
import { useContentCopy } from '../hooks';

const Input = styled.input`
  border: unset;
  border-bottom: 1px solid black;
  padding: 0.5em;

  :focus {
    outline: 2px solid #ffbc05;
    box-shadow: 0 0 0 3px rgba(255, 188, 5, 0.265);
  }
`;

interface InputFieldProps {
  autofocus?: boolean;
  label: string,
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, autofocus, onChange, name } = props;

  return (
    <FormGroup label={label}>
      <Input
        autoFocus={autofocus}
        maxLength={50}
        name={name}
        onChange={onChange}
        placeholder={useContentCopy("formfield.maxLength50")}
        type='text' />
    </FormGroup>
  );
};

export default InputField;
