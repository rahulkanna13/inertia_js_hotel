import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import BottomNavBar from '@/Components/BottomNavBar';
import './GuestLayout.css'; // Import the CSS file

export default function Guest({ children }) {
    return (
        <div className="guest-container">
            <div className="logo-container">
                <Link href="/">
                    <ApplicationLogo className="w-24 h-24 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="content-card">
                {children}
            </div>

            <BottomNavBar />
        </div>
    );
}
