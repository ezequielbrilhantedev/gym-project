import ImgLogin from '../../assets/images/woman-login.svg'
import Perfil from '../../assets/images/image-perfil.svg'

import {
  DivNavItems,
  DivWelcome,
  HomeContainer,
  ImagePersonLogin,
  Overlay,
  SpanImgPerfil,
} from './styles'
import { Form } from '../../components/Form'

export function Login() {
  return (
    <HomeContainer>
      <DivNavItems>
        <div>
          <nav>
            <span onClick={() => alert('cliquei aqui')}>
              <h5>Login</h5>
            </span>
            <span>
              <h5>Sign up</h5>
            </span>
          </nav>
          <SpanImgPerfil>
            <img src={Perfil} alt="" />
          </SpanImgPerfil>
        </div>
      </DivNavItems>
      <DivWelcome>
        <h1>Welcome back, Ezequiel</h1>
      </DivWelcome>
      <Overlay>
        <ImagePersonLogin src={ImgLogin} />
      </Overlay>
      <Form />
    </HomeContainer>
  )
}
