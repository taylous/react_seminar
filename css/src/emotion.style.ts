import { css } from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const heading = css`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const button = css`
  padding: 10px 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
