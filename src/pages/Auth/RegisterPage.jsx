import React, { useState } from "react";

const RegisterPage = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !form.username ||
            !form.email ||
            !form.password ||
            !form.confirmPassword
        ) {
            setError("Todos los campos son obligatorios.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }
        // Aquí iría la lógica de registro (API call)
        setSuccess("¡Registro exitoso!");
        setForm({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                {success && <div className="mb-4 text-green-500">{success}</div>}
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Usuario</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Tu usuario"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Tu email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Contraseña"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Repite la contraseña"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;