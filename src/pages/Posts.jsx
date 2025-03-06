import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const StyledPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #444;
  width: 50%;
  padding: 25px 40px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;

`;

const StyledTitle = styled.div`
  margin-bottom: 10px;

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #bbb;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const StyledBody = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const KudosBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: #555;
  border-radius: 6px;
  width: fit-content;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #666;
  }

  svg {
    color: #ffcc00;
  }

  span {
    font-weight: bold;
  }
`;

export default function Posts() {
  const posts = [
    { id: 1, title: "Post 1", body: "This is the body of post 1", author: "John Doe", kudos: 10 },
    { id: 2, title: "Post 2", body: "This is the body of post 2", author: "Jane Doe", kudos: 5 },
    { id: 3, title: "Post 3", body: "This is the body of post 3", author: "John Doe", kudos: 7 },
  ];

  return (
    <StyledPostsContainer>
      {posts.map((post) => (
        <StyledPosts key={post.id}>
          <StyledTitle>
            <h1>{post.author}</h1>
            <h2>{post.title}</h2>
          </StyledTitle>
          <StyledBody>{post.body}</StyledBody>
          <KudosBar>
            <ThumbUpIcon /> <span>{post.kudos}</span>
          </KudosBar>
        </StyledPosts>
      ))}
    </StyledPostsContainer>
  );
}
