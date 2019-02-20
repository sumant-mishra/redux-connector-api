import store from './redux/store';
import * as actions from './redux/actions';

export const ReduxConnector = {
    loadVODsList: () => {
    console.log('calling');
    store.dispatch(actions.fetchVODItemsList());
  },

  markFavorite: (id)=>{
    store.dispatch(actions.markFavorite(id));
  },

  unmarkFavorite: (id)=>{
    store.dispatch(actions.unmarkFavorite(id));
  },

  subscribeToState: (callback)=>{
    window.console.log('calling store');
    
    ((callback) => {
      console.log("calling IIFE");
      store.subscribe(() => {
      
        callback(store.getState());
        window.console.log('calling storesddds', store.getState())
      
      })
    }
    )(callback)
  }
}

