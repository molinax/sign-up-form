import { useForm } from 'react-hook-form'
import { message } from 'antd'

import Input from '../components/Input'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const messageSucces = () => message.success({
    content: 'The form has been sendeed',
    className: 'message-style'
  })
  const onSubmit = handleSubmit(() => {
    messageSucces()
    reset()
  })

  const inputCollection = [
    {
      type: 'text',
      config: {
        name: 'firstName',
        required: true,
        minLength: 2,
        maxLength: 20,
        pattern: /^[^0-9]*$/
      },
      register,
      errors,
      placeholder: 'First name...'
    },
    {
      type: 'text',
      config: {
        name: 'lastName',
        required: true,
        minLength: 2,
        maxLength: 20,
        pattern: /^[^0-9]*$/
      },
      register,
      errors,
      placeholder: 'Last name...'
    },
    {
      type: 'email',
      config: {
        name: 'email',
        required: true,
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
      register,
      errors,
      placeholder: 'Email...'
    },
    {
      type: 'password',
      config: {
        name: 'password',
        required: true,
        minLength: 8,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])/
      },
      register,
      errors,
      placeholder: 'Password...'
    }
  ]

  return (
    <form
      className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-5"
      onSubmit={onSubmit}
    >
      {inputCollection.map((inputItem, i) => (
        <Input {...inputItem} key={i} />
      ))}
      <input
        className="text-white bg-green shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] p-4 rounded-lg cursor-pointer w-full font-semibold uppercase tracking-wider hover:opacity-75"
        type="submit"
        value="Claim your free trial"
      />
      <p className="text-xs text-grayish-blue">
        By clicking the button, you are agreeing to our{' '}
        <span className="text-red font-semibold">Terms and Services</span>
      </p>
    </form>
  )
}

export default Form
