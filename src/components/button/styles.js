import { Link } from "wouter";
import styled from "@emotion/styled";

export const LinkStyled = styled(Link)`
    background-color: blue;
    border: 1px transparent;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    padding: .5rem 1rem;

    &:hover {
        background-color: orange;
    }

    [disabled] {
        opacity: 3;
        pointer-events: none;
    }
`

export const Button = Link.withComponent('button')