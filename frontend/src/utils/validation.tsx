import { isStrongPassword, isEmail } from "validator";

// This function used the isEmail function from validator
const validateEmail = (email: string) => isEmail(email);

// This function uses a regular expression to limit the username to
// 16 characters and only allow alphanumeric characters and underscores
const validateUsername = (username: string) =>
    /^[a-zA-Z0-9_]{1,16}$/.test(username);

// This function checks if the password is strong enough, if the password
// and the confirmation match and if the password is not too big regarding bytes
const validatePassword = (password: string, confirm: string) => {
    if (password !== confirm) {
        console.log("Passwords do not match");
        return false;
    }

    if (!isStrongPassword(password)) {
        console.log("Password is not strong enough");
        return false;
    }

    const bytes = new TextEncoder().encode(password);

    // The truth is, that the password is too big to be hashed
    if (bytes.length > 72) {
        console.log("Password has too many bytes");
        return false;
    }

    return true;
};

// Here we'll check for a valid username and a fitting password for hashing
export const validateLogin = (username: string, password: string) => {
    if (!validateUsername(username)) {
        console.log("Invalid username");
        return false;
    }

    const bytes = new TextEncoder().encode(password);

    // The truth is, that the password is too big to be hashed
    if (bytes.length > 72) {
        console.log("Password has too many bytes");
        return false;
    }

    return true;
};

// Here we'll check for a valid mail, valid username and valid password
export const validateRegistration = (
    email: string,
    username: string,
    password: string,
    confirm: string,
) => {
    if (!validateEmail(email)) {
        console.log("Invalid email");
        return false;
    }

    if (!validateUsername(username)) {
        console.log("Invalid username");
        return false;
    }

    return validatePassword(password, confirm);
};
