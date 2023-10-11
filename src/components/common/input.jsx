import styled from "styled-components";
import { SearchIcon } from "../../assets/searchIcon";
import { color } from "../../style/color";

/** icon, big은 boolen값 */
export const Input = ({ value, onChange, icon, placeholder, big }) => {
  return (
    <Container big={big}>
      {icon && <SearchIcon width={big ? 25 : 16}/>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        big={big}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
  padding: ${({ big }) => (big ? "12px 16px" : "4px 12px")};
  background-color: ${color.Basic.gray50};
  border-radius: 4px;
  align-items: center;
`;

const TextInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: ${({ big }) => (big ? "16px" : "12px")};

  line-height: 150%;
`;
