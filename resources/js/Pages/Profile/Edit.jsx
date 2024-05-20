import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
export default function Edit({ auth, mustVerifyEmail, status }) {
 return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            {/* Container for buttons */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Profile Dashboard</h1>
                {/* Button components */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 w-full"
                    onClick={() => handleButtonClick('manageHotels')}
                >
                    Manage Hotels
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 w-full"
                    onClick={() => handleButtonClick('manageBookings')}
                >
                    Manage Bookings
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 w-full"
                    onClick={() => handleButtonClick('manageUsers')}
                >
                    Manage Users
                </button>
                <Link href="manage-hotels">Manage hotels</Link>

               
            </div>
        </AuthenticatedLayout>
    );
}
