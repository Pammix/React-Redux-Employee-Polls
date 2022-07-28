import { connect } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

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
    // Add question to store
    props.dispatch(handleAddQuestion(textOne, textTwo));
    setTextOne('');
    setTextTwo('');
    navigate('/');
  };
  const charLeftOne = 100 - textOne.length;
  const charLeftTwo = 100 - textTwo.length;

  return (
    <div>
      <h3> Add Your Poll </h3>
      <form className='new-poll' onSubmit={handleSubmit}>
        <textarea
          className='text-area'
          placeholder='Option One'
          value={textOne}
          onChange={handleChangeTextOne}
          maxLength={100}
        />
        {charLeftOne <= 50 && <div className='char-left'> {charLeftOne}</div>}
        <textarea
          className='text-area'
          placeholder='Option Two'
          value={textTwo}
          onChange={handleChangeTextTwo}
          maxLength={200}
        />
        {charLeftTwo <= 50 && <div className='char-left'> {charLeftTwo}</div>}
        <button
          className='button'
          type='submit'
          disabled={textOne === '' || textTwo === ''}
        >
          {' '}
          SUBMIT{' '}
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
