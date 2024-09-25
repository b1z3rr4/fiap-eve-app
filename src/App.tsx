import './App.css'
import { Button } from './presentation/components/elements/Button';

function App() {

  return (
    <>
      <Button 
        label='Label' 
        onClick={function() {
          console.log('Teste');
        }}
      />
      <Button 
        label='FIAP' 
        onClick={function() {
          console.log('React com a FIAP!!')
        }}
      />
    </>
  )
}

export default App
