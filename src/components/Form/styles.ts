import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 1.625rem 2.25rem;
  display: flex;
  flex-direction: column;

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    color: ${(props) => props.theme.white};
    height: 3rem;

    input {
      background-color: ${(props) => props.theme.gre};
    }
  }
`

export const SpanForgotPassword = styled.span`
  text-align: right;

  a {
    color: ${(props) => props.theme.green};
    cursor: pointer;
  }
`
export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  div {
    display: flex;
    gap: 1.31rem;
  }

  button {
    background: none;
    border: none;
  }
`

export const ButtonSubmit = styled.input`
  background: ${(props) => props.theme.green};
  width: 7.81rem;
  height: 3.125rem;
  padding: 0.8125rem 1.25rem;
  border-radius: 48px;
  color: ${(props) => props.theme.dark};
  border: none;
`
