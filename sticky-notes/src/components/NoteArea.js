import React, { useEffect } from "react";
import { Box } from "rebass";
import Note from "./Note";
import { RebassHeading } from "./RebassHeading";
import { connect } from "react-redux";
import { getDataConfigAction } from "../redux/actions";
import { selectMainHeader } from "../redux/selectors/noteSelectors";
import NoteList from "./NoteList";

const NoteArea = (props) => {
  const { getNoteData, isLoading } = props;

  // fetch initial data
  useEffect(() => {
    getNoteData();
  }, []);

  return (
    <Box textAlign={"center"}>
      {!isLoading ? (
        <>
          <RebassHeading
            fontFamily={"Poppins"}
            value={"Add your Notes"}
            marginBottom={[2, 3, 4]}
            fontSize={[5, 6, 7]}
          />
        </>
      ) : (
        "loading..."
      )}
      <Note />
      <NoteList />
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
    getNoteData: () => {
      dispatch(getDataConfigAction(() => {}));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteArea);
