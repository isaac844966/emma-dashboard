import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .darkText {
    color: var(--Very-Dark-Blue-Text);
  }
  .lightText {
    color: var(--white);
  }
  @media only screen and (min-width: 986px) {
    .wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
