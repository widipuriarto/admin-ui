import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormForgotPassword from '../components/Fragments/FormForgotPassword'

function forgotPassword() {
    return (
        <AuthLayout>
            <FormForgotPassword />
        </AuthLayout>
    )
}

export default forgotPassword