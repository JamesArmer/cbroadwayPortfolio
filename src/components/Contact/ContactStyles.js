import styled from 'styled-components'

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 50px;
	color: #000000;
	margin-bottom: 32px;
  margin-top: 32px;
	transition: .3s ease;
	position: relative;
	left: 0;
  text-align: center;

	&:hover {
		color: #cdcbcb;
		left: 4px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`
