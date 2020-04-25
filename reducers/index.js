import {
  ADD_CARD_TO_DECK,
  ADD_DECK_TITLE,
  DELETE_DECK,
  FETCH_DECKS,
} from '../actions';

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...action.decks,
      };
    default:
      return state;
  }
};

export default decks;