import styled from "styled-components";

const Wrapper = styled.section`
  .card {
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
    position: relative;
  }
  /* .card::before {
    content: "";
    height: 4px;
    position: absolute;
    top: 0;
    background-color: red;
  } */
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    color: hsl(228, 12%, 44%);
  }
  h1 {
    font-weight: 700;
    font-size: 3rem;
  }
  h4 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  .facebook {
    height: 5px;
    width: 100%;
    background-color: var(--Facebook);
    position: absolute;
    top: 0;
    border-radius: 8px 8px 0 0;
  }
  .twitter {
    height: 5px;
    width: 100%;
    background-color: red;
    position: absolute;
    top: 0;
    border-radius: 8px 8px 0 0;
  }
  .youtube {
    height: 5px;
    width: 100%;
    background-color: var(--YouTube);
    position: absolute;
    top: 0;
    border-radius: 8px 8px 0 0;
  }
  .instagram {
    height: 5px;
    width: 100%;
    background-color: var(--Bright-Red);
    position: absolute;
    top: 0;
    border-radius: 8px 8px 0 0;
  }
  .bg-light {
    background-color: var(--Light-Grayish-Blue-Card-BG);
  }
  .bg-dark {
    background-color: #252b43;
  }
  @media only screen and (min-width: 1000px) {
    width: 20rem;
  }
`;
export default Wrapper;