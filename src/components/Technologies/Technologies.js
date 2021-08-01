import React from 'react';
import { DiFirebase, DiFsharp, DiPhp, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Технологии</SectionTitle>
    <List>
      <ListItem>
        <DiReact  size="3rem"/>
        <ListContainer>
          <ListTitle>FrontEnd-Development</ListTitle>
          <ListParagraph>
            Работаю с <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhp  size="3rem"/>
        <ListContainer>
          <ListTitle>BackEnd-Development</ListTitle>
          <ListParagraph>
            Работаю с <br />
            PHP, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFsharp  size="3rem"/>
        <ListContainer>
          <ListTitle>Game-Development</ListTitle>
          <ListParagraph>
            Работаю с <br />
            C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
