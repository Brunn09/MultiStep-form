//Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import Review from './components/Review'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

//Hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {

  const [data, setData] = useState(formTemplate)

  const updateFieldhandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key] : value};
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldhandler={updateFieldhandler}/>,
    <Review data={data} updateFieldhandler={updateFieldhandler}/>,
    <Thanks data={data} />
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o fomulario para avaliar o produto</p>
      </div>
      <div className='form_container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="input_container">
              {currentComponent}
          </div>
          <div className="action">  
            {isFirstStep ? ('') : 
             (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}

            {!isLastStep ? (<button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend />
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
