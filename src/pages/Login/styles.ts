import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  background: ${(props) => props.theme.dark};
`

export const DivImage = styled.div`
  width: 100%;
`

export const ImagePersonLogin = styled.img`
  width: 100%;
`

export const DivNavItems = styled.div`
  /* background: red; */
  position: absolute;
  width: 100%;
  padding: 0 2rem;

  div {
    display: flex;
    justify-content: space-between;
    height: 10rem;

    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
      color: black;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }
`

export const SpanImgPerfil = styled.span`
  display: flex;
  align-items: center;

  img {
    width: 3.5rem;
  }
`
export const DivWelcome = styled.div``
