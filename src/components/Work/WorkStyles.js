import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transform: scale(1.01);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  gap: 2rem;
  padding-bottom: 250px;
  width: 1280px;

  grid-template-areas:
    'a  a  a  a  F  F  F  b  b'
    'a  a  a  a  F  F  F  b  b'
    'C  C  C  c  F  F  F  b  b'
    'C  C  C  c  d  d  d  b  b'
    'C  C  C  c  e  O  O  O  f'
    'g  g  g  c  e  O  O  O  f'
    'h  S  S  S  e  O  O  O  f'
    'h  S  S  S  e  i  i  i  f'
    'h  S  S  S  e  j  H  H  H'
    'h  k  k  k  e  j  H  H  H'
    'h  k  k  k  e  j  H  H  H';

  grid-template-rows: repeat(11, 9.1%);
  grid-template-columns: repeat(9, 9.5%);
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  width: 400px;
  max-height: 600px;

  grid-area: ${(props) => props.gridId};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 50%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1px;
  color: #000000;
  font-size: '2rem';
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dceOe7;
  font-family: 'Droid  Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: Frem 1.5rem;
  background: #6bO0O0;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #80F4F4;
  }
`;

export const HorizontalDiv = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const TagDiv = styled.div`
  text-align: left;
  width: 50%;

  list-style: none;
`;

export const Tag = styled.li`
  color: #5b5b5b;
  font-size: 2rem;
  text-align: right;
`;
