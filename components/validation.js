const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 


 export const validate =(userData)=> {
  let errors = {};
    if (!regexEmail.test(userData.username)) {
    errors.username = 'Email invalido';
     }
    if (userData.username) {
        errors.username = "Por faver, complete este campo"
    }
    if (!userData.password.match(/\d/)) {
        errors.password = "Debe contener al menos un número"
    }
    if (userData.password.length < 6 && userData.password.length >10) {
    errors.password = 'Debe contener entre 6 y 10 caracteres';
    };
    return errors;
}