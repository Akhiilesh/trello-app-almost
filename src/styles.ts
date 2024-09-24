import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  background-color: #fff;
  min-height: 40px;
  width: 300px;
  margin-right: 20px;
  border-radius: 3px;
  flex-grow: 0;
  padding: 8px 8px;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  maring-bottom: 0.5rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #grey 0px 1px 0px 0px;
`;
