import { connect } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import './NewPoll.css';

const NewPoll = (props) => {
  const navigate = useNavigate();

  const [textOne, setTextOne] = useState('');
  const [textTwo, setTextTwo] = useState('');

  const handleChangeTextOne = (e) => {
    const text = e.target.value;
    setTextOne(text);
  };
  const handleChangeTextTwo = (e) => {
    const text = e.target.value;
    setTextTwo(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleAddQuestion(textOne, textTwo));
    setTextOne('');
    setTextTwo('');
    navigate('/');
  };
  const charLeftOne = 100 - textOne.length;
  const charLeftTwo = 100 - textTwo.length;

  return (
    <div className='wrapper-container'>
      <h1 className='gradient-text'> Add Your Own Poll </h1>
      <h3> Would You Rather</h3>
      <form className='new-poll' onSubmit={handleSubmit}>
        <div className='text-area-wrapper'>
          <h4 className='lable'> Option One</h4>
          <textarea
            className='text-area'
            placeholder='Option One'
            value={textOne}
            onChange={handleChangeTextOne}
            maxLength={100}
          />
          {charLeftOne <= 50 && (
            <div className='char-left'> {charLeftOne} characters left</div>
          )}
          <h4 className='lable'> Option Two</h4>
          <textarea
            className='text-area'
            placeholder='Option Two'
            value={textTwo}
            onChange={handleChangeTextTwo}
            maxLength={200}
          />
          {charLeftTwo <= 50 && (
            <div className='char-left'> {charLeftTwo} characters left</div>
          )}
        </div>
        <button
          className='btn-sumbit'
          type='submit'
          disabled={textOne === '' || textTwo === ''}
        >
          {' '}
          Add{' '}
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
