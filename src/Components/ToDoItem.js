import { Component } from 'react';

// Stylesheets
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  };

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { id, title, completed } = this.props.todo;

    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => this.props.setUpdate(e.target.value, id)}
          onKeyDown={(e) => this.handleUpdateDone(e)}
        />
      </li>
    );
  }
}

export default TodoItem;
