import ImgLogin from '../../assets/images/woman-login.svg'
import Perfil from '../../assets/images/image-perfil.svg'
import ButtonGoogle from '../../assets/images/ButtonGoogle.svg'
import ButtonApple from '../../assets/images/ButtonApple.svg'

import {
  ButtonSubmit,
  DivButton,
  DivNavItems,
  DivWelcome,
  FormContainer,
  HomeContainer,
  ImagePersonLogin,
  Overlay,
  SpanForgotPassword,
  SpanImgPerfil,
} from './styles'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface Inputs {
  email: string
  password: string
}

export function Login() {
  const { register, handleSubmit } = useForm<Inputs>()

  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmitForm(data: any) {
    console.log(data)
    navigate('/home')
  }

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

      <FormContainer>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div>
            <TextField
              label="Email"
              type="email"
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{
                style: { color: 'white' },
              }}
              fullWidth
              variant="standard"
              required
              {...register('email')}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              InputLabelProps={{ style: { color: 'white' } }}
              inputProps={{
                style: { color: 'white' },
              }}
              fullWidth
              variant="standard"
              required
              {...register('password')}
            />
          </div>
          <SpanForgotPassword>
            <a>Forgot Password</a>
          </SpanForgotPassword>

          <DivButton>
            <div>
              <span>
                <button>
                  <img src={ButtonApple} alt="" />
                </button>
              </span>
              <span>
                <button>
                  <img src={ButtonGoogle} alt="" />
                </button>
              </span>
            </div>
            <div>
              <ButtonSubmit type="submit" value="Login" />
            </div>
          </DivButton>
        </form>
      </FormContainer>
    </HomeContainer>
  )
}
