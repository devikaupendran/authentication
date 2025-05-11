import validator from 'validator';

export const validateSignupData = ({ name, email, password, confirmPassword }) => {
    const errors = [];

    if (!name, !email, !password, !confirmPassword) {  //checking all fields are filled
        errors.push("Please fill all the fields")
    }

    if (!validator.isEmail(email)) {     //validating email format
        errors.push("Please enter a valid email")
    }

    if (password.length < 8) {     //checking the length of password 
        errors.push("Password must be atleast 8 characters");
    }

    if (password !== confirmPassword) {     //checking passwords and confirm passwords are same
        errors.push("Password do not match")
    }

    return {
        isValid: errors.length === 0,
        errors, 
    }
}