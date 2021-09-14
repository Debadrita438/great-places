export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = title => {
    return {
        action: ADD_PLACE,
        placeData: {
            title
        }
    }
}