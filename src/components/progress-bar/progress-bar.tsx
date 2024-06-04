import { ArrayNumbers } from '../../consts'

type ProgressBarProps = {
    questionId: string | null
  }

export default function ProgressBar({questionId}: ProgressBarProps) {
    return (
        <div className='progress-bar'>
            {ArrayNumbers.map((value) => (
                <hr key={value} style={
                    Number(questionId) === Number(value) ? { backgroundColor: '#B92A35' } : { backgroundColor: 'black' } &&
                    Number(questionId) < Number(value) ? { backgroundColor: '#E1E1E1' } : { backgroundColor: 'black' }
                } className='progress-value'></hr>
            ))
            }
        </div>
    )
}
