import styled from 'styled-components'
import { media } from './medias'

export const TitleCTA = styled.h3`
  font-weight: 300;
  font-size: 1.8em;
  color: #fff;  
  ${ media.desktop`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
  `};
  ${ media.tablet`
  font-size: 1.6em;
  text-align: center;
  color: #fff;
  `};
  ${ media.handheld`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  `};
`

export const LT = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
`
export const MT = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`
export const ST = styled.h4`
  font-size: 1.2em;
  text-align: center;
  color: #fff;
`
