import React, { useState } from 'react'
import { CardDisplay, CardInputs, ModalContentWrapper } from './style'
import logo from '../../assest/image/logo2.png'
import TextComponent from './TextComponent'
import Custombutton from '../../component/button'
import { MdModeEditOutline } from 'react-icons/md'
import CustomField from '../../component/customField/CustomField'
import CardText from './CardText'
import { AiFillApple } from 'react-icons/ai'
import { HiWifi } from 'react-icons/hi'
import { BsBookmarkCheck, BsPatchCheckFill } from 'react-icons/bs'
import { FcSimCardChip } from 'react-icons/fc'
import { RxBorderDotted } from 'react-icons/rx'
import mastercard from '../../assest/image/mastercard.png'
import { cc_format, getHourMinute } from '../../func'
import mastercardlogo from '../../assest/image/mastercardlogo.png'
import circle from '../../assest/image/circle2.png'

const HomeModalContent = () => {

    const [value, setValue] = useState('')

    const { currentHour, currentMinute } = getHourMinute()
    return (
        <ModalContentWrapper>
            <CardInputs>
                <div className='logo_wrapper'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <h3>AceCoin<span className='pay'>Pay</span></h3>

                    </div>
                    <div className='time_wrapper'>
                        <div className='time_block'>{currentHour[0]}</div>
                        <div className='time_block'>{currentHour[1]}</div>
                        <div className='time_colon'>:</div>
                        <div className='time_block'>{currentMinute[0]}</div>
                        <div className='time_block'>{currentMinute[1]}</div>
                    </div>
                </div>
                <div className='cardinput'>
                    <div className='edit-card' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextComponent head={'Card Number'} text={'Enter the 16 digit number on your card'} />
                        <div>
                            <Custombutton color='#035FFF' icon={MdModeEditOutline} text="Edit" iconProps={{ color: '#035FFF', fontSize: 16 }} />
                        </div>
                    </div>
                    <div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <CustomField type={'text'} img={mastercardlogo} icon={BsPatchCheckFill} iconColor={'#035FFF'} value={cc_format(value)} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div className='edit-card'>
                        <TextComponent head={'CVV Number'} text={'Enter the 3 or 4 digit number on your card'} />
                        <CustomField type={'password'} />
                    </div>

                    <div className='edit-card'>
                        <TextComponent head={'Expiry Date'} text={'Enter the expiration date on the card'} />
                        <div className='expitationwrapper'>
                            <CustomField />
                            <div className='dash'>/</div>
                            <CustomField />
                        </div>
                    </div>

                    <div className='edit-card'>
                        <TextComponent head={'Password'} text={'Enter your dynamic password'} />
                        <CustomField type={'password'} />
                    </div>
                    <Custombutton text={'Pay Now'} bg='#035FFF' bold='700' margin='1rem 0rem 0rem 0rem' />
                </div>
            </CardInputs>
            <CardDisplay>
                <div className='card'>
                    <div className='cir1'>
                        <img src={circle} alt='' />
                    </div>
                    <div className='cir2'>
                        <img src={circle} alt='' />
                    </div>
                    <div className='smallcard'>
                        <div className='line'></div>
                    </div>
                    <div className='chip-wifi-wrapper'>
                        <FcSimCardChip fontSize={30} />
                        <HiWifi fontSize={22} />
                    </div>
                    <div className='name-holder'>
                        <h5>Jonathan Micheal</h5>
                        <h6 className='card-no'><RxBorderDotted fontSize={40} />&nbsp; 2521</h6>
                    </div>
                    <div style={{ marginTop: '0.5rem' }}>
                        <CardText title={'11/20'} color='black' img={mastercard} />
                    </div>
                </div>
                <div className='cardholder'>
                    <div className='card-text-content'>
                        <CardText title={'Company'} icon={AiFillApple} product={'Apple'} />
                        <CardText title={'Order Number'} product={'1266102'} />
                        <CardText title={'Product'} product={'MacBook Air'} />
                        <CardText title={'Vat (20%)'} product={'$100.00'} />
                    </div>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <div className='pay-wrapper'>
                        <h6>You have to Pay</h6>
                        <div className='pay-value'>
                            <h3>549.<span className='nine'>99</span><span className='usd'> USD</span></h3>
                            <div>
                                <BsBookmarkCheck fontSize={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardDisplay>
        </ModalContentWrapper>
    )
}

export default HomeModalContent