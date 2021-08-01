import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Добро пожаловать <br/>
        На мой профиль!
      </SectionTitle>
        <SectionText>
          Я студент: Fullstack-Development, C#, GameDev
        </SectionText>  
        <Button onClick={() => window.location = 'https://github.com/Poltos021'}>
          Узнать больше
          </Button>  
      </LeftSection>
  </Section>
);

export default Hero;