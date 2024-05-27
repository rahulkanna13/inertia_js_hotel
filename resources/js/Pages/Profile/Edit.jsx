import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Edit.css';
import { Link } from '@inertiajs/react';
export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="profile-container">
                <div className="profile-section">
                    <h1 className="section-title">Profile Dashboard</h1>
                    <Link href="manage-hotels">
                    <div className="dashboard-item">
                        <span className="dashboard-icon">🏨</span>
                        <span className="dashboard-label">Manage Hotels</span>
                    </div> </Link>
                    <hr className="dashboard-divider" />
                    <div className="dashboard-item">
                        <span className="dashboard-icon">📋</span>
                        <span className="dashboard-label">Manage Bookings</span>
                    </div>
                    <hr className="dashboard-divider" />
                    <div className="dashboard-item">
                        <span className="dashboard-icon">👥</span>
                        <span className="dashboard-label">Manage Users</span>
                    </div>
                   
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
