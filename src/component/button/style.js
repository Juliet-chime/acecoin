import styled from 'styled-components';

export const Buttonstyles = styled.button`
  background: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || '100%'};
  border: ${(props) => props.border || 'none'};
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  gap:${(props) => props.gap || '0.2rem'} ;
  border-radius: ${(props) => props.radius || '0.25rem'};
  outline: none;
  font-weight: ${(props) => props.bold || 400};
  text-transform: ${(props) => props.upperCase && 'Uppercase'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize};
  height: ${(props) => props.height || '2.5rem'};
  opacity: ${(props) => props.disabled && '0.5'};
  cursor: pointer;
`;