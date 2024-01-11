import ImgLogin from '../../assets/images/woman-login.svg'
import { DivImage, HomeContainer, ImagePersonLogin } from './styles'

export function Login() {
  return (
    <HomeContainer>
      <DivImage>
        <ImagePersonLogin src={ImgLogin} />
      </DivImage>
    </HomeContainer>
  )
}
