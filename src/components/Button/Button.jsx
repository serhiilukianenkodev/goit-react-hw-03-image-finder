import { ButtonStyled } from 'components/Button/ButtonStyled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load More
    </ButtonStyled>
  );
};
