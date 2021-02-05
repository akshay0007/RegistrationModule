import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";

const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "min length should be 2").max(15, "max length should be 15").required("Required"),
    lastName: Yup.string().min(2, "min length should be 2").max(15, "max length should be 15").required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(6, "min length should be 2").max(15, "max length should be 15").required("Required")

});

function Register() {
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit(values) {
            console.log(values);
        }
    });
    return (
        <form className="formClass" onSubmit={handleSubmit}>
            <label >first name</label>
            <input
                name="firstName"
                id="firstName"
                onChange={handleChange}
                values={values.firstName}
            />
            {errors.firstName ? errors.firstName : null}
            <br />
            <label >last name</label>
            <input
                name="lastName"
                id="lastName"
                onChange={handleChange}
                values={values.firstName}
            />
            {errors.lastName ? errors.lastName : null}
            <br />
            <label >email</label>
            <input
                name="email"
                id="email"
                onChange={handleChange}
                values={values.email}
            />
            {errors.email ? errors.email : null}
            <br />
            <label>password</label>
            <input
                name="password"
                id="password"
                onChange={handleChange}
                values={values.password}
            />
            {errors.password ? errors.password : null}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}


export default Register;

