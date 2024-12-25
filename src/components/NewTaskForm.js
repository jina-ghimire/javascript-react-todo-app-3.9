import React, { useState }  from 'react'
import PropTypes from 'prop-types'
export default function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onAddTask(value.trim());
      setValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
         onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}
NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};