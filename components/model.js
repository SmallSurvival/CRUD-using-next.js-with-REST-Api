import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {updater} from '../Services/users.services'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({open,setOpen,update}) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .email('Enter a valid name')
            .required('Name is required'),
        job: yup
            .string('Enter your Job')
            .required('job is required'),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: update.id,
            job: update.first_name
        },
        isValueLoded: false,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values ", values);
            updater(values.name, values.job);
            alert(JSON.stringify(values, null, 2));
            setOpen(false); 
        },
    });
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <form onSubmit={formik.handleSubmit} >
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
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
                            />
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}