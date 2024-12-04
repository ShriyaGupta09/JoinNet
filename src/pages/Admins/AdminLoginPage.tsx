import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
    const { category } = useParams(); 
    const navigate = useNavigate();
    const [formType, setFormType] = useState<'login' | 'signup'>('login'); 
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formType === 'login') {
            alert('Login form submitted');
        } else {
            alert('Signup form submitted');
        }
      
        navigate(`/admin-dashboard`);
    };

    const validatePassword = (password: string) => {
        const passwordStrengthRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordStrengthRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long, with uppercase, lowercase, number, and special character.');
        } else {
            setPasswordError('');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    };

    return (
        <div style={{ padding: '25px' }}>
            <div className="max-w-md mx-auto border-2 border-blue-100 rounded-lg shadow-lg p-6 mt-8 flex flex-col justify-between" style={{ minHeight: '500px', minWidth: '550px' }}>

                <h2 className="text-3xl font-bold text-center mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>


                <form onSubmit={handleFormSubmit} className="flex flex-col justify-center flex-grow space-y-4">

                    {formType === 'signup' && (
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Company Email</label>
                            <input type="email" id="email" className="mt-1 p-2 w-full border rounded" required />
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username or Employee ID</label>
                        <input type="text" id="username" className="mt-1 p-2 w-full border rounded" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="mt-1 p-2 w-full border rounded"
                            required
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded transition-none"
                        style={{ transition: 'none' }}
                    >
                        Submit
                    </button>
                </form>

                <div className="mt-4 text-center">
                    {formType === 'login' ? (
                        <p>
                            Don't have an account? <button onClick={() => setFormType('signup')} className="text-blue-500 hover:no-underline">Sign Up</button>
                        </p>
                    ) : (
                        <p>
                            Already have an account? <button onClick={() => setFormType('login')} className="text-blue-500 hover:no-underline">Login</button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage
