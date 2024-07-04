import ActionTypes from "../actionTypes"

// action tanımları bileşen içerisinde çok kod tekrarına sebep olduuğndan aksiyonları ayrı bir bileşende tanımladık. askiyonlar birer nesne ama payload değerleri belli olamdığı için parametre alabildiğinden dolayı fonksiyon yazdık ve fonkasiyon aldğ
export const addTodo = (payload) => {
    return ({type: ActionTypes.ADD, payload })

}

export const deleteTodo = (payload) => ({
    type: ActionTypes.DELETE,
    payload
})

export const updateTodo = (payload) => ({
    type: ActionTypes.UPDATE,
    payload
})

