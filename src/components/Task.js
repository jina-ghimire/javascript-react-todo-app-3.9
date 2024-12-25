import React,{useState} from 'react'
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default function Task({ description, created, completed, editing,onToggleCompletion, onDelete, onStartEditing, onSaveDescription }) {
  const [editValue, setEditValue] = useState(description);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSaveDescription(editValue);
    }
  };
  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed} onChange={onToggleCompletion} />
        <label>
          <span className="description">{description}</span>
          <span className="created">{`Created ${formatDistanceToNow(new Date(created))} ago`}</span>
        </label>
        <button className="icon icon-edit" onClick={onStartEditing}></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
      {editing && <input type="text" className="edit" defaultValue={description} onChange={(e) => setEditValue(e.target.value)}  onKeyDown={handleKeyDown} />}
    </li>
  )
}
Task.defaultProps = {
  description: 'No description provided',
  created: new Date(),
  completed: false,
  editing: false,
  onToggleCompletion: () => {},
  onDelete: () => {},
  onStartEditing: () => {},
  onSaveDescription: () => {},
};

Task.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  onSaveDescription: PropTypes.func.isRequired,
};