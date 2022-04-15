import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {AddTodo} from '../Services/users.services'
import Loader from "../components/loader"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    outerHeight: '25%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const WithMaterialUI = ({open,setOpen}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open3, setOpen3] = React.useState(false);
    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .email('Enter a valid name')
            .required('Name is required'),
        job: yup
            .string('Enter your Job')
            .required('job is required'),
    });
    const axios = require('axios');
    const formik = useFormik({
        initialValues: {
            name: 'name@example.com',
            job: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values ", values);
            AddTodo(values.name, values.job);
            alert(JSON.stringify(values, null, 2));
            setOpen(false); 
        },
    });

    return (
        <div>
            <Button onClick={handleOpen}>Add</Button>
            <Loader open={open3} setOpen={setOpen3} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                style={{marginBottom:'15px'}}
                            />
                            <TextField
                                fullWidth
                                id="job"
                                name="job"
                                label="Job"
                                type="Text"
                                value={formik.values.job}
                                onChange={formik.handleChange}
                                error={formik.touched.job && Boolean(formik.errors.job)}
                                helperText={formik.touched.job && formik.errors.job}
                                style={{marginBottom:'15px'}}
                            />
                            <Button color="primary" variant="contained" fullWidth type="submit" onClick={(e) => setOpen3(true)}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default WithMaterialUI;