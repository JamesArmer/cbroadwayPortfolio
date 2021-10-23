import styled from 'styled-components'

export const SectionText = styled.p`
max-width: 70%;
font-size: 20px;
line-height: 25px;
font-weight: 300;
padding-bottom: 3.6rem;
color: #000000;
text-align: justify;
margin-left: auto;
margin-right: auto;

@media ${(props) => props.theme.breakpoints.md} {
  max-width: 670px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 24px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
`

export const SectionTitle = styled.h2`
  font-weight: lighter;
  font-size: 50px;
  line-height: ${(props) => props.main ? '72px' : '56px'};
  background: #000000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;

  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionQuote = styled.p`
max-width: 100%;
font-size: 20px;
font-style: italic;
line-height: 50px;
font-weight: lighter;
padding-bottom: 2.4rem;
color: #000000;
text-align: center;

@media ${(props) => props.theme.breakpoints.md} {
  max-width: 670px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 24px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
`

export const Img = styled.img`
  width:60%;
  height:50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
`