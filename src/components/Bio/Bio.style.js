import styled from "styled-components";
import color from '../../utils/colors';
import { respondTo } from '../../utils/respondTo';

export const Container = styled.div`
  display: flex;
	justify-content: space-between;
	flex-direction: column;
	${respondTo.md`
		flex-direction: row;
	`}
`

export const AuthorContent = styled.div`
	${respondTo.sm`
		max-width: 35rem;
	`}
`

export const AuthorDetals = styled.div`
	display: flex;
`;

export const IntroAuthor = styled.span`
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 14px;
  color: ${color.secondary};
`

export const Text = styled.div`
	max-width: 15rem;
`;

export const AuthorName = styled.h2`
  width: 15rem;
  line-height: 34px;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${color.dark};
`

export const Description = styled.div`
  line-height: 24px;
  font-size: 15px;
  font-weight: 300;
	color: ${color.grey};
	padding-top: 1rem;
	${respondTo.sm`
		max-width: 35rem;
		margin-left: 5rem;
		padding-top: 0;
	`}

`

export const SocialMedia = styled.div`
  width: 7rem;
  padding-top: 1.8rem;
  display: flex;
  justify-content: space-between;
	flex-direction: row;
	${respondTo.sm`
		margin-left: 5rem;
		flex-direction: row-reverse;
	`}
`
