export const addUser = ({
    firstName = "",
    lastName = "",
    birthday = "",
    age = "",
    hobby = ""
} = {}) =>({
    type: "ADD_USER",
    users:{
    firstName,
    lastName,
    birthday,
    age,
    hobby
    }
})