import './index.css'
import './main.css'
import Questions from './components/questions/questions'
import Timer from './components/timer/timer'

export default function Main() {
  return (
    <div className='main'>
      <div className='header'>
        <h1>Тестирование</h1>
        <Timer />
      </div>
      <Questions />
    </div>
  )
}