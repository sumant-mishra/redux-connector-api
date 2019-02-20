import axios from 'axios';

export const FETCH_VOD_LIST = 'FETCH_VOD_LIST';
export const VOD_LIST_FETCHED = 'VOD_LIST_FETCHED';
export const MARK_FAVORITE = 'MARK_FAVORITE';
export const UNMARK_FAVORITE = 'UNMARK_FAVORITE';

export const fetchVODItemsList = () => {
    console.log('actions');
    return (dispatch) => {
        
        //axios.get('https://ottapp-appgw-client-a.osim.mr.tv3cloud.com/S104/discovery/v4/feeds/ee8fb0cb-d624-4907-a877-58269f0cbc86/items?pivots=Language|en&$top=16&$groups=11472%2C4000000&$lang=en-US&storeId=HubsAndFeeds-Main')
        axios.get('http://18.221.25.207:3000/')
        .then(function (response) {
            dispatch( {
                type: VOD_LIST_FETCHED,
                payload: response.data.Items
            })
        })
        .catch(function (error) {
            console.log("error: ", error);
        });

    }
}

export const markFavorite = (id) => {
    return {
        type: MARK_FAVORITE,
        payload: id
    }
}

export const unmarkFavorite = (id) => {
    return {
        type: UNMARK_FAVORITE,
        payload: id
    }
}

