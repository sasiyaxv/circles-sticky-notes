import React, { useState, useEffect } from "react";
import { Box, Button } from "rebass";
import Note from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import {
  addNote,
  editNote,
  deleteNote,
  getDataConfigAction,
  addEmptyNote,
} from "../redux/actions";
import { selectMainHeader } from "../redux/selectors/noteSelectors";
import { AddedNote } from "./AddedNote";

const NoteArea = (props) => {
  const { mainHeader, getNoteData, isLoading, notes, addEmpty, deleteThis } =
    props;

  console.log("NOTES", notes);

  const [noteArea, setNoteArea] = useState([]);

  // notes.map((note)=>{
  //   <Note noteId={notes.noteId} noteTitle={notes.noteTitle} noteValue={notes.noteValue}/>
  // })

  function addBtnClicked(e) {
    e.preventDefault();
    addEmpty();
    setNoteArea(noteArea.concat(<Note />));
  }

  function deleteBtnClicked() {
    // deleteThis(noteId);
  }

  // fetch initial data
  useEffect(() => {
    getNoteData();
  }, []);

  return (
    <Box>
      {!isLoading ? (
        <>
          <RebassHeading
            value={"Add your Notes"}
            marginBottom={[2, 3, 4]}
            fontSize={[5, 6, 7]}
          />
        </>
      ) : (
        "loading..."
      )}

      <Note />

      {/* {noteArea} */}

      {/* {notes.map((note) => {
        <Note
          noteId={note.noteId}
          noteHeader={note.noteHeader}
          noteValue={note.noteValue}
        />;
      })} */}

      <ul>
        {notes.map((note) => {
          return (
            <li>
              {note.noteHeader} {note.noteValue}{" "}
              <button
                onClick={() => {
                  deleteThis(note.noteId);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>

      {/* <Button
        onClick={addBtnClicked}
        sx={{
          fontSize: 1,
          background: "black",
          margin: 2,
          textAlign: "right",
        }}
      >
        +
      </Button> */}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    mainHeader: selectMainHeader(state),
    isLoading: state.settings.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmpty: (noteId, noteHeader, noteValue) => {
      dispatch(addEmptyNote(noteId, noteHeader, noteValue));
    },

    deleteThis: (noteId) => {
      dispatch(deleteNote(noteId));
    },

    getNoteData: () => {
      dispatch(getDataConfigAction(() => {}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
