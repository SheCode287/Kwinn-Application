import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import { Form, Formik } from "formik"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { addUser } from "../Redux/post/postSlice";
import Sidebars from "./Sidebars";

const initialValues = {
    fullName: '',
    studentID: '',
    courseOfStudy: '',
    level: ''

}

const userSchema = yup.object().shape({
    fullName: yup.string().min(6, 'Full Name must be atleast 6 digits').required('required'),
    studentID: yup.string().required('required').matches(/^[0-9]+$/, 'Student ID must be a number'),
    courseOfStudy: yup.string().required('required'),
    level: yup.string().required('required')
})

const options = [
    { label: 'Medical Engineering', value: ' Medical Engineering' },
    { label: 'Quantity Survey', value: 'Quantity Survey' },
    { label: 'Public Health', value: 'Public Health' },
    { label: 'Nursing', value: 'Nursing' },
    { label: 'Real Estate', value: 'Real Estate' },
];
const options2 = [
    { label: 'Bachelors', value: 'Bachelors' },
    { label: 'PhD', value: 'PhD' },
    { label: 'PostGraduate Degree', value: 'PostGraduate Degree' },
    { label: 'Diploma', value: 'Diploma' },
];



function RegistrationForm() {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const handleFormSubmit = async (values) => {
        console.log(values)
        if (values) {
            await dispatch(addUser(values))
            navigation('/view')
        } else {
            alert('Add User')
        }
    }
    return (

        <Box sx={{ display: 'flex' }} >
            <Sidebars />

            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '8%' }}>
                <Typography textAlign={'center'} fontSize={'32px'}>Register</Typography>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={userSchema}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Box margin={'30px'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'}>
                                <TextField
                                    style={{ width: '50vw' }}
                                    // fullWidth
                                    type="text"
                                    label="Full Name"
                                    onChange={handleChange}
                                    value={values.fullName}
                                    name="fullName"
                                    error={!!touched.fullName && !!errors.fullName}
                                    helperText={touched.fullName && errors.fullName}
                                />
                                <TextField
                                    style={{ width: '50vw' }}
                                    // fullWidth
                                    type="text"
                                    label="Student ID"
                                    onChange={handleChange}
                                    value={values.studentID}
                                    name="studentID"
                                    error={!!touched.studentID && !!errors.studentID}
                                    helperText={touched.studentID && errors.studentID}
                                />
                                <TextField
                                    style={{ width: '50vw' }}
                                    // fullWidth
                                    select
                                    type="text"
                                    label="Course of Study"
                                    onChange={handleChange}
                                    value={values.courseOfStudy}
                                    name="courseOfStudy"
                                    error={!!touched.courseOfStudy && !!errors.courseOfStudy}
                                    helperText={touched.courseOfStudy && errors.courseOfStudy}
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    style={{ width: '50vw' }}
                                    //    fullWidth
                                    select
                                    label="Level"
                                    onChange={handleChange}
                                    value={values.level}
                                    name="level"
                                    error={!!touched.level && !!errors.level}
                                    helperText={touched.level && errors.level}
                                >
                                    {options2.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    mt="20px"
                                    ml={'85%'}
                                >
                                    <Button type="submit" color="secondary" variant="contained">
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
}

export default RegistrationForm;
