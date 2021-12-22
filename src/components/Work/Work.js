import React from "react";

import {
  BlogCard,
  GridContainer,
  HeaderThree,
  Tag,
  TagDiv,
  TitleContent,
  Img,
  HorizontalDiv,
} from "./WorkStyles";
import { Section } from "../../styles/GlobalComponents/indexStyles";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="work" work>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard
            key={i}
            gridId={p.gridId}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          >
            <a href={p.visit}>
              <Img src={p.image} />
              <HorizontalDiv>
                <TitleContent>
                  <HeaderThree>{p.title}</HeaderThree>
                </TitleContent>
                <TagDiv>
                  <Tag>{p.tags}</Tag>
                </TagDiv>
              </HorizontalDiv>
            </a>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
