import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  ButtonSubmit,
  DivButton,
  FormContainer,
  SpanForgotPassword,
} from './styles'

import { TextField } from '@mui/material'

import ButtonGoogle from '../../assets/images/ButtonGoogle.svg'
import ButtonApple from '../../assets/images/ButtonApple.svg'

const formValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um e-mail válido com o @' }),
  password: zod.string().min(6),
})

type FormData = zod.infer<typeof formValidationSchema>

export function Form() {
  const navigate = useNavigate()

  const loginForm = useForm<FormData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { register, handleSubmit } = loginForm

  function handleSubmitForm(loginForm: FormData) {
    console.log(loginForm)
    navigate('/home')
  }

  return (
    <>
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
              <ButtonSubmit type="submit" />
            </div>
          </DivButton>
        </form>
      </FormContainer>
    </>
  )
}
