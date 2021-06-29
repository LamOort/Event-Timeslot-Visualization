import styled from '@emotion/styled';

export const PageBlockWrapper = styled.div`
  width: 100%;
  padding: 0 8px;
  max-width: calc(100% - 58px);

  @media only screen and (min-width: 992px) {
    padding: 0 25px;
    max-width: calc(100% - 200px);
  } ;
`;
