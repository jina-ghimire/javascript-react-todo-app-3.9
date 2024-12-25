import React from 'react'
import TasksFilter from './TasksFilter'
import PropTypes from 'prop-types'

export default function Footer({count, onClearCompleted, filter, setFilter}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.defaultProps = {
  count: 0,
  onClearCompleted: () => {},
  filter: 'All',
  setFilter: () => {},
};
Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
