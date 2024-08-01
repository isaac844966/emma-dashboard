import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
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
