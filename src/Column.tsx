import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn Typescript</CardContainer>
      <CardContainer>Being to use static Typing</CardContainer>
    </ColumnContainer>
  );
};

export default Column;
