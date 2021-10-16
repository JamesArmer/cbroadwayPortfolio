import React from 'react';

import { BlogCard, GridContainer, HeaderThree, Tag, TagDiv, TitleContent, Img, HorizontalDiv } from './WorkStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents/indexStyles';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="work">
    <SectionDivider />
    <SectionTitle main>Work</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
          <HorizontalDiv>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
            </TitleContent>
              <TagDiv>
                <Tag>{p.tags}</Tag>
              </TagDiv>
          </HorizontalDiv>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;