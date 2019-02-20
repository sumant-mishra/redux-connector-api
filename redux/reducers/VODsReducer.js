import { FETCH_VOD_LIST, VOD_LIST_FETCHED, MARK_FAVORITE, UNMARK_FAVORITE } from './../actions'

const initialState = [];

export default function VODItemsReducer(state = {vodItems: initialState}, action) 
{

    var vodItems = state.vodItems;   
    var arr = [];
    switch (action.type) {
        
        case VOD_LIST_FETCHED:
            vodItems = action.payload;
            vodItems.map((item)=>{
                item.isMarkedAsFavorite = false;
            })
            return {vodItems: vodItems};


        case MARK_FAVORITE:
            vodItems.map((item)=>{
                if(item.Id == action.payload)
                {
                    item.isMarkedAsFavorite = true;
                }
                arr.push(item);
            })
            return {vodItems: arr};


        case UNMARK_FAVORITE:
            vodItems.map((item)=>{
                if(item.Id == action.payload)
                {
                    item.isMarkedAsFavorite = false;
                }
                arr.push(item)
            })
            return {vodItems: arr};


        default:
            return state
    }
}