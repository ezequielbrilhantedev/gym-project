import ImgLogin from '../../assets/images/woman-login.svg'
import Perfil from '../../assets/images/image-perfil.svg'

import {
  DivImage,
  DivNavItems,
  DivWelcome,
  HomeContainer,
  ImagePersonLogin,
  SpanImgPerfil,
} from './styles'

export function Login() {
  return (
    <HomeContainer>
      <DivImage>
        <DivNavItems>
          <div>
            <nav>
              <h5>Login</h5>
              <h5>Sign up</h5>
            </nav>
            <SpanImgPerfil>
              <img src={Perfil} alt="" />
            </SpanImgPerfil>
          </div>
        </DivNavItems>
        <DivWelcome>
          <h1>Welcome back, Ezequiel</h1>
        </DivWelcome>
        <ImagePersonLogin src={ImgLogin} />
      </DivImage>
    </HomeContainer>
  )
}
