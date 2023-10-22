import { RiInformationFill } from 'react-icons/ri'

const Input = ({ type, placeholder, register, config, errors }) => {
  const { name, required, minLength, maxLength, pattern } = config
  const currentError = errors[name]

  const errorMessages = {
    empty: 'This input is required',
    minLength: `Enter a minimum of ${minLength} characters`,
    maxLength: `Enter a value less than ${maxLength} characters`,
    patterns: {
      lastName: 'Numbers are not allowed',
      firstName: 'Numbers are not allowed',
      email: 'Invalid email',
      password:
        'Contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    }
  }

  return (
    <div>
      <label
        className={`p-4 w-full rounded-md border-2 inline-flex items-center gap-2 ${
          currentError && 'border-red'
        }`}
      >
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: {
              value: required,
              message: errorMessages.empty
            },
            minLength: {
              value: minLength,
              message: errorMessages.minLength
            },
            maxLength: {
              value: maxLength,
              message: errorMessages.maxLength
            },
            pattern: {
              value: pattern,
              message: errorMessages.patterns[name]
            }
          })}
          className={`placeholder:font-semibold text-sm outline-none w-full ${
            currentError && 'placeholder:text-red/70'
          }`}
        />
        {currentError?.type && (
          <RiInformationFill className="text-red text-lg" />
        )}
      </label>
      {currentError && (
        <p className="text-left text-sm mt-1 text-red font-semibold">
          {currentError.message}
        </p>
      )}
    </div>
  )
}

export default Input
