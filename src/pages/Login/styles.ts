import styled from 'styled-components'

export const HomeContainer = styled.main``

export const Overlay = styled.div`
  background: ${(props) => props.theme['gray-600']};
  min-width: 100%;
  opacity: 43%;
`

export const ImagePersonLogin = styled.img`
  width: 100%;
`

export const DivNavItems = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 2rem;

  z-index: 1;

  div {
    display: flex;
    justify-content: space-between;
    height: 10rem;

    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`

export const SpanImgPerfil = styled.span`
  display: flex;
  align-items: center;

  img {
    width: 3.5rem;
    z-index: 1;
  }
`
export const DivWelcome = styled.div`
  position: absolute;
  width: 100%;
  height: 47vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 2.25rem;
    text-transform: uppercase;
    line-height: 2.875rem;
    letter-spacing: 0.2rem;

    z-index: 1;
  }
`
