import { isEmail, isStrongPassword } from "validator";

/**
 * This function uses the validator library to check if the email is valid.
 * @param email - the email to be checked
 */
const validateEmail = (email: string) => isEmail(email);

/**
 * This function checks if the username is valid with a regex.
 * The username must be between 1 and 16 characters long and can only contain letters, numbers and underscores.
 * @param username - the username to be checked
 */
const validateUsername = (username: string) =>
    /^[a-zA-Z0-9_]{1,16}$/.test(username);

/**
 * This function checks if the password is valid.
 * The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.
 * It also can't be bigger than 72 bytes.
 * @param password - the password to be checked
 * @param confirm - the second password to be checked
 */
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

/**
 * This function checks if the login is valid.
 * @param username - the username to be checked
 * @param password - the password to be checked
 */
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

/**
 * This function checks if the registration is valid.
 * @param email - the email to be checked
 * @param username - the username to be checked
 * @param password - the password to be checked
 * @param confirm - the second password to be checked
 */
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
