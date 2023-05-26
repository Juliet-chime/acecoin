import styled from 'styled-components'

export const ModalContentWrapper = styled('div')`
display: flex;
gap: 1.5rem;
padding: 1rem;
@media (max-width: 1024px) {
 flex-direction: column;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`

export const CardInputs = styled.div`
flex: 2;
.logo_wrapper{
    display: flex;
    border: red;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    .logo{
        display: flex;
        align-items: center;
        img{
            object-fit: contain;
        }
        h3{
            font-weight: 900;
            .pay{
                font-weight: normal;
            }
        }
    }
    .time_wrapper{
    display: flex;
    gap: 0.3rem;
    .time_block{
        width: 1rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1C2A4F;
        color: white;
        border-radius: 2px;
    }
    .time_colon{
        font-weight: 600;
        font-size: 1rem;
    }
}
}
.cardinput{
    margin-top: 1rem;
    .edit-card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        @media (max-width: 1024px) {
        flex-direction: ${props => props.row ? 'row' : 'column'};
        align-items: ${props => props.row ? 'center' : 'flex-start'} ;
        justify-content: ${props => props.row ? 'center' : 'flex-start'};
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
    }
    .expitationwrapper{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 57%;
        @media (max-width: 1024px) {
width: 100%;
  }
  @media (max-width: 1280px) {
    width: 100%;
  }
        .dash{
            font-weight: 700;
            font-size: 1rem;
        }
    }
}
@media (max-width: 1024px) {
flex: 1;
  }
`

export const CardDisplay = styled.div`
flex: 1;
position: relative;
.card{
    width: 65%;
    background-color: white;
    height: 14rem;
    position: absolute;
    transform: translate(15%);
   padding: 0rem 1rem;
    border-radius: 4px;
    z-index: 9999;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.07);
    .cir1{
        position: absolute;
        bottom: 33px;
        right: 17px;
        transform: rotate(16deg);
        z-index: -1;
      img {
        width: 153px;
        filter: grayscale(100%);
        mix-blend-mode: difference;
        @media (max-width: 1024px) {
            display: none;
            }
  @media (max-width: 1290px) {
      display: none;
  }
          }
}

    .cir2{
position: absolute;
bottom: -10px;
right: 17px;
transform: rotate(13deg);
z-index: -1;
img{
    width: 156px;
    filter: grayscale(100%);
    mix-blend-mode: difference;
    @media (max-width: 1024px) {
display: none;
  }
  @media (max-width: 1290px) {
      display: none;
  }
}
    }
    .smallcard{
        width: 30%;
        position: relative;
        top: -5px;
        z-index: 10;
        margin: auto;
        height: 1rem;
        border-radius: 4px;
        background: #F1F5FE;
        .line{
            height: 4px;
            border-radius: 4px 4px 0px 0px;
            background: #035FFF;
        }
    }

    .chip-wifi-wrapper{
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top:1rem;
    }

    .name-holder{
        position: relative;
        z-index: 10;
        margin-top: 2.5rem;
        h5{
            font-size: 1rem;
            color:#C1C8CE;
        }
        .card-no{
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            
        }
    }
}

.cardholder{
    z-index: -1;
    margin-top: 4.5rem;
    border-radius: 6px;
    background-color: #EDF2F5;
    padding: 10.5rem 1.5rem 1rem 1.5rem;

    .card-text-content{
       border-bottom: 2px dotted #C1C8CE;
       padding: 0.5rem 0rem 1rem 0rem;
    }
    .circle1{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: white;
        position: absolute;
        left:-10px;
        bottom: 80px;
    }
    .circle2{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: white;
        position: absolute;
        right:-10px;
        bottom: 80px;
    }
    .pay-wrapper{
        margin-top: 1.3rem ;
        h6{
            font-size: 10px;
            color: #C1C8CE;
        }
        .pay-value{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        h3{
            color:#181E42;
            font-weight: 900;
            font-size: 30px;
            .nine{
               font-weight: normal;
               font-size: 20px;
               margin-top: 10px;
            }
            .usd{
                font-weight: normal;
               font-size: 1rem;
               color:#BDC2C8 !important;
            }
        }
    }
}
@media (max-width: 1024px) {
flex: 1;
  }
`

export const TextStyles = styled.div`
h2{
    font-weight: 700;
    font-size: 1rem;
}
p{
    color: #CDCDCD;
    font-size: 0.6rem;
    margin-top: 0.3rem;
    @media (max-width: 1024px) {
margin-bottom: 0.3rem;
  }
}
`

export const CardTextWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom:0.5rem;
h4{
    font-size: 0.7rem;
    color:${props => props.color || '#C1C8CE'};
   }
.icon-text{
    display: flex;
    align-items: center;
    gap: 0.4rem;
    img{
        width: 45px;
        object-fit: contain;
    }
   .iconwrap{
    width: 17px;
    height: 17px;
    font-size: 30px;
    background-color:black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
   }
   .product{
        color: black;
        font-weight: 900;
    }
}
`