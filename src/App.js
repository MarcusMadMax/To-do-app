import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [
      ],
      noteInputValue: '',
    }
  }

  handleNoteInputChange = (e) => {//always use arrow function
    this.setState({ noteInputValue: e.target.value })
    // to get input do e.target
  }

  handleAddButtonClick = (e) => {
    e.preventDefault()
    var note = {
      id: Date.now(),
      text: this.state.noteInputValue
    }

    var newNotes = [note, ...this.state.notes]

    this.setState({
      notes: newNotes,
      noteInputValue: ''//clears input field
    })

  }

  handleNoteDelete = (e) => {
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.notes
    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })
    this.setState({notes:filteredNotes})
  }

  render() {
    //My new commitment
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
            {
              this.state.notes.map( (note) =>{
                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i className="far fa-times-circle note-remove" id={note.id} onClick={this.handleNoteDelete}></i>
                      <div className="note-text">
                        {note.text}
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="note new-note">
              <form className="note-body">
                <div className="form-group">
                  <label htmlFor="note-input">New note</label>
                  <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}>Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
