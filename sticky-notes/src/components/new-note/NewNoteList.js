import React, { useState } from "react";
import NewTitleComponent from "./NewTitleComponent";
import { connect } from "react-redux";

import "./styles.css";

const NewNoteList = (props) => {
  return (
    <div>
      <div className="app-sidebar">
        <div className="app-sidebar-search">
          {/* <input
            type="text"
            placeholder="Search"
            onChange={(e) => getInput(e.target.value)}
            value={input}
          ></input> */}
        </div>
        <div className="app-sidebar-notes">
          {props.notes.map((note) => (
            <NewTitleComponent
              key={note.noteId}
              noteId={note.noteId}
              title={note.noteHeader}
              noteDate={note.noteDate}
            />
          ))}
          {/* {currentActiveNotes.map((note) => (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              onClick={() => setActiveNote(note.id)}
            >
              <DeleteIcon
                className="sidebar-note-delete"
                onClick={() => onDeleteNote(note.id)}
              />
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
              </div>
              <p>{note.body && note.body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NewNoteList);
