const {useState} = require('react')

const useInput = initialValues => {
  const [input, setInput] = useState(initialValues)

  const control = e => {
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }

  const reset = () => setInput(initialValues)

  return {...input, set: setInput, control, reset}
}

export default useInput
