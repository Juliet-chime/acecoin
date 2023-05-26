import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.7);
  color: white;
  z-index: 999999;
`

export const ModalBodyContainer = styled.div`
  min-width: ${(props) => (props.minWidth ? props.minWidth : '53%')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '80%')};
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.background ? props.background : 'white')};
  color: black;
  box-shadow: 0.25rem 0.5rem 1.563rem rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 999999999;
  transform: translate(-50%, -45%);
  &::-webkit-scrollbar{
        display: none;
    }

  @media (max-width: 1024px) {
    min-width: 95%;
    margin: 0;
  }
`
export const CloseModal = styled.div`

display: flex;
justify-content: flex-end;
  .hide_icon{
  font-size: 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  background: #EDEDED;
  color: #CDCDCD;
  }
`

export const ModalHeader = styled.div`
margin-top: 1rem;
`

export const ModalBody = styled('div')`
padding: 1.25rem ;
@media (max-width: 1024px) {
padding: 0.5rem;
  }
`

