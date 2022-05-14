import React from 'react'
import { IoLogoInstagram} from 'react-icons/io'
import { ContainerFooter, ButtonSocialMedia, P, ButtonWrap, Title } from './styles'
import { FaWhatsapp } from "react-icons/fa";
import {TiSocialFacebook } from "react-icons/ti"
import { MdMail } from 'react-icons/md'


export const Footer = () => {

    return(
        <div>
            <ContainerFooter>
                <ButtonWrap>
                    <ButtonSocialMedia href='https://www.instagram.com/bicubica.art/?hl=es-la'>
                        <IoLogoInstagram size="1.8rem"/>
                    </ButtonSocialMedia>
                    <ButtonSocialMedia href='https://www.facebook.com/B-I-C-U-B-I-C-A-152792052211875/'>
                        <TiSocialFacebook  size="1.8rem"/>
                    </ButtonSocialMedia>
                    <ButtonSocialMedia onClick = {() => {alert('0342-1234124')}}>
                        <FaWhatsapp size="1.8rem"/>
                    </ButtonSocialMedia>
                    <ButtonSocialMedia >
                        <MdMail size="1.8rem"/>
                    </ButtonSocialMedia>
                </ButtonWrap>
            </ContainerFooter>
        </div>
    )
}