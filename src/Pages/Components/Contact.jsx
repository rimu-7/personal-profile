import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('https://personal-node-mailer.vercel.app/api/send-mail', formData);
            if (response.data.message) {
                toast.success(response.data.message);  // Show success toast
            } else if (response.data.warning) {
                toast.success(response.data.message);
                toast.error('Confirmation email could not be sent.');  // Show error toast
            }
        } catch (err) {
            toast.error(err.response?.data?.error || 'Internal Server Error');  // Show error toast
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='p-4 block rounded-lg bg-background-secondary hover:bg-opacity-80 transition duration-300'>
                <div className='flex flex-col'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='border py-2 mb-3 rounded'
                        placeholder=' Name'
                    />
                </div>
                <div className='flex flex-col'> 
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='border py-2 mb-3 rounded'
                        placeholder=' Email'
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='border py-2 mb-3 rounded'
                        placeholder=' Write your message'
                    />
                </div>
                <button type="submit" disabled={loading} className='flex flex-col py-2 mb-3 rounded bg-green-400 w-full cursor-pointer'>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>

            <ToastContainer /> 
        </div>
    );
};

export default Contact;
