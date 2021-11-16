import styled, { css } from 'styled-components';
import { colors, fonts, styles } from '@themes';

const flexConfig = (justify = 'center', align = 'center') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
`;
const spaceConfig = ({ top = 0, right = 0, bottom = 0, left = 0}) => css`
    margin: ${top} ${right} ${bottom} ${left} 
`;
export const Space = styled.div`
    ${props => spaceConfig({ top: props.top, right: props.right, bottom: props.bottom,  left: props.left })}
`;
export const Container = styled.div`
    max-width: ${styles.maxWidth};
    margin: 0 auto;
    padding: 0 1em;
`;
export const FlexBetween = styled.div`
    ${flexConfig('space-between', 'center')};
    ${props => `
        min-height: ${props.height};
    `}
`;
export const FlexCenter = styled.div`
    ${flexConfig()};
`;
export const FlexContainer = styled.div`
    display: flex;
`;
export const Card = styled.div`
    padding: 2em;
    background-color: ${colors.white};
    border-radius: ${styles.borderRadius};
    box-shadow: ${styles.boxShadow};
`;

export const BorderedCard = styled(Card)`
    box-shadow: initial;
    border: 2px solid ${colors.greyLight};
`;
export const Field = styled.div`
    display: grid;
    label {
        display: block;
        margin-bottom: .2em;
        font-weight: ${fonts.weight.medium};
        color: ${colors.grey};
    }
`;
export const Input = styled.input`
    width: 100%;
    padding: 1em;
    border: none;
    border-bottom: 2px solid ${colors.greyLight};
    outline: none;
    transition: all .2s;
    font-weight: ${fonts.weight.medium};
    color: ${colors.text};
    &:focus {
        border-bottom: 2px solid ${colors.primary};
    }
`;

export const Line = styled.div`
    height: 2px;
    background-color: ${colors.greyLight};
`;

export const Title = styled.h2`
    margin-bottom: .3em;
    ${props => `
        color: ${props.color ?  props.color : colors.text};
        font-weight: ${props.weight ? props.weight : 'bold'};
        font-size: ${props.size && `${fonts[props.size]}`};
        text-align: ${props.align && props.align }
    `}
`;
export const Subtitle = styled.h6`
    color: ${colors.grey};
`;

export const Button = styled.button`
    && {
        padding: 1em 1.3em;
        border: none;
        outline: none;
        ${props => `
            background-color:  ${colors[props.type]};
            color: ${colors[`${props.type}Light`]};
        `}
        font-weight: ${fonts.weight.bold} !important;
        border-radius: ${styles.borderRadius};
        cursor: pointer;
        transition: all .2s;
        box-shadow: ${styles.boxShadow};
        &:hover {
            ${props => `
                background-color: ${colors[`${props.type}Dark`]}; 
            `}
        }
        &:disabled {
            background-color: ${colors.greyLight};
            color: ${colors.grey};
            cursor: not-allowed;
        }
    }
`;

export const Bold = styled.strong`
    color: ${props => props.color ? props.color : colors.text};
`;

export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${props => props.size && `${fonts[props.size]}`};
`;

export const Label = styled.label`
    font-size: ${styles.smallSize};
    font-weight: ${styles.medium};
    color: ${colors.grey};
`;

export const Heading=styled.h3`
    font-size: ${styles.fontSmall};
    font-weight: ${styles.medium};
    ${props => props.marginBottom && 'margin-bottom:2rem;'};
`;