import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Web Page
        </SectionTitle>
        <SectionText>
        Here you can learn more about me, my skills and technologies I`ve working with. You`ll be also able to check my CV and a completed projects. 
        </SectionText>
        <Button onClick={props.handleClick}><Link href='/Eduard-Tymoshuk-cv.pdf' target="_blank">Watch CV</Link></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;