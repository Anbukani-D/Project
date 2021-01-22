// create validation Password
export const CheckPassword = password => {
    const regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let errorCode = null;
    if (password == '') {
        errorCode = 1;
    } else if (!regex1.test(password)) {
        errorCode = 2;
    }
    return errorCode;
};
// check user name
export const CheckUserName = username => {
    const stringCheck = /[a-zA-Z]/;
    let errorCode = null;
    if (!username) {
        errorCode = 1;
    } else if (stringCheck.test(username)) {
        console.log('1');
        const emailError = CheckEmail(username);
        emailError ? (errorCode = 2) : (errorCode = null);
    } else {
        console.log('2');
        const phoneError = CheckPhone(username);
        phoneError ? (errorCode = 3) : (errorCode = null);
    }
    return errorCode;
};
// create validation Email
export const CheckEmail = email => {
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let errorCode = null;
    if (email != '') {
        if (!regex.test(email)) {
            errorCode = 1;
        }
    }
    return errorCode;
};
// create validation Email
export const CheckPhone = phone => {
    const regex = /^[0-9]{10}$/;
    let errorCode = null;
    if (phone) {
        if (!regex.test(phone)) {
            errorCode = 1;
        }
    }
    console.log(errorCode);
    return errorCode;
};