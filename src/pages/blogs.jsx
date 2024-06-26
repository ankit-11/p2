
import styled from 'styled-components';

// Styled components
const Section = styled.section`
  padding: 4rem 0;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 2rem;
  text-align: left;
  margin-left: 50px;

  @media (min-width: 1024px) {
    text-align: end;
  }
`;

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.a`
  color: var(--purple);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Blogs() {
  return (
    <Section>
      <Container>
        <H1>Blogs</H1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard>
            <Title>Blog Title 1</Title>
            <Description>
              A short description of the blog article goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Description>
            <ReadMoreLink href="https://medium.com/your-medium-link" target="_blank" rel="noopener noreferrer">
              Read more
            </ReadMoreLink>
          </BlogCard>

          <BlogCard>
            <Title>Blog Title 2</Title>
            <Description>
              Another short description of the blog article. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </Description>
            <ReadMoreLink href="https://medium.com/your-medium-link" target="_blank" rel="noopener noreferrer">
              Read more
            </ReadMoreLink>
          </BlogCard>

          {/* Add more BlogCard components as needed */}
        </div>
      </Container>
    </Section>
  );
}

export default Blogs;
