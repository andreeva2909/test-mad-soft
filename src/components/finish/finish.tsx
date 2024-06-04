type FinishProps = {
    questionId: string | null
  }

export default function Finish({questionId}: FinishProps) {
    return (
        <div id='finish' style={questionId === '7' ? { display: 'block' } : { display: 'none' }}>
            <h3>Тест завершен. Спасибо!</h3>
        </div>
    )
}
