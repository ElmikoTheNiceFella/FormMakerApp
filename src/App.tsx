import './App.scss'
import { Template1 } from './templates';

function App() {

  const template = "Template1";

  return (
    <>
      {template == "Template1" && <Template1 />}
    </>
  )
}

export default App
