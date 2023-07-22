'use client'
import  FireForm  from "./FireForm"
import { ContactInputConfig } from './ContactInputConfig';
import React from "react";

const FirebaseProvider = () => {
    return (
    <FireForm formConfig = {ContactInputConfig}/>
    )
}

export default FirebaseProvider;