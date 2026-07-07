import React, { useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignUp from '../components/Fragments/FormSignUp'
import AppSnackbar from '../components/Elements/AppSnackbar'
import { registerService } from '../service/authService'

function signUp() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      // Jika berhasil, munculkan notifikasi hijau
      setSnackbar({ open: true, message: "Registrasi Berhasil", severity: "success" });
    } catch (err) {
      // Jika error (misal email sudah dipakai), munculkan notifikasi merah
      setSnackbar({ open: true, message: err.msg || "Email sudah pernah digunakan sebelumnya", severity: "error" });
    }
  };

  return (
    <AuthLayout>
        {/* Mengirimkan fungsi handleRegister ke form */}
        <FormSignUp onSubmit={handleRegister} />

        {/* Komponen Notifikasi Pop-Up */}
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
    </AuthLayout>
  )
}

export default signUp
