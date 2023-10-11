import styled, { css } from "styled-components";
import { color } from "./color";

export const Button = styled.button`
  ${({ gray }) =>
    gray
      ? css`
          background-color: ${color.Basic.gray200};
          color: ${color.Basic.gray600};
        `
      : css`
          background-color: ${color.Brand.primary};
          color: ${color.Basic.white};
        `};
  ${({ small }) =>
    small
      ? css`
          padding: 8px 16px;
          font-size: 20px;
        `
      : css`
          padding: 12px 24px;
          font-size: 24px;
        `}

  line-height: 150%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 0px 0px 1px gray;
  }
`;
