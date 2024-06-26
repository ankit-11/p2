import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: end;
  }
`;


const StyledImg = styled.img`
  margin: 0 auto;
  width: 300px;
  height: auto;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 2s infinite alternate;

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2rem);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2rem);
    }
  }
  @media (min-width: 1024px) {
    max-height: 500px;
    height: auto;
    padding: 0rem 2rem;
  }
`;

function Education() {
  return (
    <section className="px-8 py-8 flex justify-center items-center bg-center bg-fixed bg-[var(--background)]">
      <div className="flex flex-col w-full md:w-4/5 lg:w-4/5">
        <H1>Education</H1>
        <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-start">
          <div className="flex py-8 w-3/4 lg:w-1/2">
            <div>
              <StyledImg src="khwopa.jpg" alt="Khwopa College" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:gap-0">
            <h3>Bachelor of Computer Engineering</h3>
            <p>Khwopa College Of Engineering</p>
            <h4>2019-2024 | Recent Graduate</h4>
          </div>
          <div className="flex py-8 w-3/4 lg:w-1/2">
            <div>
              <StyledImg src="liverpool.jpg" alt="Liverpool International College" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:gap-0">
            <h3>+2 Science</h3>
            <p>Liverpool International College</p>
            <h4>2017-2019</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
