import styled from "styled-components";

export const DropdownWrap = styled.div`
	position: relative;
	display: inline-block;
`;

export const Dots = styled.div`
	cursor: pointer;
	font-size: 1.5rem;
	color: #929191;
	${({theme}) => theme.media.tablet`
		font-size: 1.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1.2rem;
	`}
`;

export const DropdownBox = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: center;
	position: absolute;
	z-index: 1;
	right: 0;
	background: #D5D5D5;
	border-top: solid 1px #fff;
	border-left: solid 1px #fff;
	border-right: solid 1px #000;
	border-bottom: solid 1px #000;
	width: 7rem;
	padding: 0.3rem 0;
	${({theme}) => theme.media.tablet`
		width: 5.3rem;
	`}
	${({theme}) => theme.media.desktop`
		width: 5.3rem;
	`}
`;

export const MenuList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	div {
		cursor: pointer;
		font-size: 1rem;
		line-height: 1rem;
		margin: 0.3rem 0;
	}
	${({theme}) => theme.media.tablet`
		div {
			font-size: 0.75rem;
			line-height: 0.75rem;
			margin: 0.2rem 0;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 0.75rem;
			line-height: 0.75rem;
			margin: 0.2rem 0;
		}
	`}
`;