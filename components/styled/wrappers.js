import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'
import { mediaQ } from './medias'

export const Container_main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 !important;
  background: ${ props => props.theme.bodyBG };
  ${mediaQ.giant`padding: 0`};
  ${mediaQ.desktop`padding: 0`};
  ${mediaQ.tablet`padding: 0 5px`};
  ${mediaQ.phone`padding: 0 5px`};
`
export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
`
export const Section = styled.section`
  border: 2px solid #fff;
  margin: 0 0 5%;
  background: rgba(#fff, 0.3);
  text-align: center;
`
export const PicWrapper = styled.div`
    width: 32%;
    margin: 0.4em;
    overflow: hidden;
  ${ media.wide`
    width: 32%;
    margin: 0.4em;
  ` };
  ${ media.desktop`
    width: 32%;
    margin: 0.3em;
  ` };
  ${ media.tablet`
    width: 32%;

    margin: 0.2em;
  ` };
  ${ media.handheld`
    width: 48%;
    margin: 0.1em;
  ` }
`
