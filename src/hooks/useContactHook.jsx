import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useContactHook(){
     const [formValue, setFormValue] = useState({
            first_name: '',
            last_name: '',
            email: '',
            message: ''
        })
    
        const navigate = useNavigate();
    
        const handleChange = (e) => {
            setFormValue({
                ...formValue,
                [e.target.name]: e.target.value
            })
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post("http://localhost:8000/api/create", formValue)
                .then(() => navigate("/contact-me"))
        }

    // Return the state and the handler so the component can use them
    return { formValue, handleChange, handleSubmit };

}

export default useContactHook;
