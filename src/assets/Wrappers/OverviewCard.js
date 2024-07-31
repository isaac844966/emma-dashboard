import styled from "styled-components";

const Wrapper = styled.section`
  .overview {
    /* background-color: var(--Very-Pale-Blue-Top-BG-Pattern); */
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    max-width: 30rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  h3 {
    color: hsl(228, 12%, 44%);
    text-transform: capitalize;
  }
  .views,
  .counts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  .bg-light {
    background-color: var(--Light-Grayish-Blue-Card-BG);
  }
  .bg-dark {
    background-color: #252b43;
  }
  @media only screen and (min-width: 1000px) {
    .overview {
      width: 20rem;
    }
  }
`;
export default Wrapper;
