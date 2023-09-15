import styled from "styled-components";

export default function CommentForm({ onSubmitComment, slug }) {
  return (
    <Form onSubmit={(event) => onSubmitComment(event, slug)}>
      <label htmlFor="comment">Add comment</label>
      <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
      <button>Send</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;
