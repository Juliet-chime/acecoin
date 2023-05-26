import styled from 'styled-components';

export const CustomFieldStyle = styled('div')`
width: 100%; 
.inputWrapper{
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
border: ${(props) => props.inputline || '2px solid #CDCDCD'};
border-radius: ${(props) => props.inputRadius || '4px'};
padding: 0rem 0.5rem;
img{
    width: 30px;
    object-fit: contain;
}
input{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 20px;
  background: ${(props) => props.bg || 'transparent'};
  width: ${(props) => props.width || '100%'};
  border: ${(props) => props.border || 'none'};
  height: ${(props) => props.height || '2.5rem'};
  outline: none;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius || '4px'};
  &.focus {
    outline: none;
  }
}
.showPassword{
    position: absolute;
    right: 0.6rem;
    top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
}
`;

export const ErrorComponent = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;
