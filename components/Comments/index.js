import styled from "styled-components";

export default function Comments({ comments }) {
  return (
    <PageWrapper>
      <h3>Comments: </h3>
      <ul>
        {comments?.map((comment) => {
          return <li key={comment}>{comment}</li>;
        })}
      </ul>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
