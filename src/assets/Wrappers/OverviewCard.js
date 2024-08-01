import styled from "styled-components";

const Wrapper = styled.section`
  .overview {
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
    cursor: pointer;
    transition: ease 0.5s;
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
  .darkText {
    color: var(--Very-Dark-Blue-Text);
  }
  .lightText {
    color: var(--white);
  }
  .bg-dark {
    background-color: #252b43;
  }
  .bg-dark:hover {
    background-color: #333a56;
  }
  .bg-light:hover {
    background-color: #e1e3f0;
  }
  @media only screen and (min-width: 1000px) {
    .overview {
      width: 20rem;
    }
  }
`;
export default Wrapper;
