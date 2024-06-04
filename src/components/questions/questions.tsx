import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { ArrayNumbers } from '../../consts';
import ProgressBar from '../progress-bar/progress-bar';
import Finish from '../finish/finish';

export default function Questions() {
    const [questionId, setQuestionId] = useState(localStorage.getItem('questionId') ? localStorage.getItem('questionId') : '1')
    const [answer, setAnswer] = useState(localStorage.getItem('answer') ? localStorage.getItem('answer') : '')
    window.onbeforeunload = () => { setAnswer('') };

    const handleRadioInput: FormEventHandler<HTMLInputElement> = (event) => {
        setAnswer(String(event.currentTarget.value))
        localStorage.setItem('answer', String(event.currentTarget.value));
    }

    const handleInputTextarea: FormEventHandler<HTMLTextAreaElement> = (event) => {
        setAnswer(String(event.currentTarget.value))
        localStorage.setItem('answer', String(event.currentTarget.value));
    }

    const handleInputText: FormEventHandler<HTMLInputElement> = (event) => {
        setAnswer(String(event.currentTarget.value))
        localStorage.setItem('answer', String(event.currentTarget.value));
    }

    const handleChangeCheckbox: ChangeEventHandler<HTMLInputElement> = () => {
        const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked')
        const arrayCheckedInputs = [...checkedInputs] as [HTMLInputElement]
        const checkedValues = arrayCheckedInputs
            .map(checkbox => checkbox.value);
        setAnswer(checkedValues.join(','))
        localStorage.setItem('answer', checkedValues.join(','));
    }

    const handleAnswerBtnClick = () => {
        if (questionId && (questionId > String(ArrayNumbers.length))) {
            setQuestionId(String(ArrayNumbers.length + 1));
            localStorage.setItem('questionId', String(ArrayNumbers.length + 1));
        } else {
            setQuestionId(String(Number(questionId) + 1));
            localStorage.setItem('questionId', String(Number(questionId) + 1));
        }
        setAnswer('');
        localStorage.setItem('answer', '');
    }

    return (
        <>
            <ProgressBar questionId={questionId}/>
            <div className='questions'>
                <form>
                    <div className='question' id='questionFirst' style={questionId === '1' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 1
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-1" value="1" onChange={handleRadioInput} checked={answer === '1'} />Первый вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-1" value="2" onChange={handleRadioInput} checked={answer === '2'} />Второй вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-1" value="3" onChange={handleRadioInput} checked={answer === '3'} />Третий вариант ответа
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='question' id='questionSecond' style={questionId === '2' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 2
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-2" value="1" onChange={handleRadioInput} checked={answer === '1'} />Первый вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-2" value="2" onChange={handleRadioInput} checked={answer === '2'} />Второй вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-2" value="3" onChange={handleRadioInput} checked={answer === '3'} />Третий вариант ответа
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='question' id='questionThird' style={questionId === '3' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 3
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <textarea rows={10} cols={60} onInput={handleInputTextarea} value={String(answer)}></textarea>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='question' id='questionFourth' style={questionId === '4' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 4
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="checkbox" name="question-4-1" value='1' onChange={handleChangeCheckbox} checked={answer?.includes('1')} />Первый вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="checkbox" name="question-4-2" value='2' onChange={handleChangeCheckbox} checked={answer?.includes('2')} />Второй вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="checkbox" name="question-4-3" value='3' onChange={handleChangeCheckbox} checked={answer?.includes('3')} />Третий вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="checkbox" name="question-4-4" value='4' onChange={handleChangeCheckbox} checked={answer?.includes('4')} />Четвертый вариант ответа
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='question' id='questionFifth' style={questionId === '5' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 5
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <label>
                                        <input type='text' name='question-5' value={String(answer)} size={30} onInput={handleInputText}></input>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='question' id='questionSixth' style={questionId === '6' ? { display: 'block' } : { display: 'none' }}>
                        <label>
                            Вопрос 6
                            <div className='possible-answers'>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-6" value="1" onChange={handleRadioInput} checked={answer === '1'} />Первый вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-6" value="2" onChange={handleRadioInput} checked={answer === '2'} />Второй вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-6" value="3" onChange={handleRadioInput} checked={answer === '3'} />Третий вариант ответа
                                    </label>
                                </div>
                                <div className='possible-answer'>
                                    <label>
                                        <input type="radio" name="question-6" value="4" onChange={handleRadioInput} checked={answer === '4'} />Четвертый вариант ответа
                                    </label>
                                </div>
                            </div>
                        </label>
                    </div>
                </form>
                <Finish questionId={questionId}/>
                <button id='finish-button' onClick={handleAnswerBtnClick} disabled={!answer || answer === '' } style={questionId === '7' ? { display: 'none' } : { display: 'block' }}>Ответить</button>
            </div>
        </>
    )
}