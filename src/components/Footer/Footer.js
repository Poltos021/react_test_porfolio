import React from 'react';
import { AiFillAccountBook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillRest, AiFillRedditCircle, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Footer>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Вызов</LinkTitle>
      <LinkItem href="#tel">+7-...-...-..-..</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Почта</LinkTitle>
      <LinkItem href="#email">poltos021@yandex.ru</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Тестовый сайт на React + Next</Slogan>
          </CompanyContainer>

        <SocialContainer>
        <SocialIcons href="https://github.com/Poltos021">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.reddit.com/user/Poltos_021">
        <AiFillRedditCircle size="3rem"></AiFillRedditCircle>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UCLvnKif6lBRU53-OHk1QeHg">
        <AiFillYoutube size="3rem"></AiFillYoutube>
      </SocialIcons>
      </SocialContainer>

        </SocialIconsContainer>
    </Footer>
  );
};

export default Footer;
