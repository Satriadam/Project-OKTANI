import { Link, useLocation } from 'react-router-dom';

export const AccountSettingsNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-[#E5DEFF] text-[#7E69AB]' : 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <div className="p-4">
        <h2 className="text-gray-600 font-semibold mb-2">PROFIL</h2>
        <nav className="space-y-2">
          <Link
            to="/account-settings"
            className={`block px-4 py-2 rounded-lg ${isActive('/account-settings')}`}
          >
            Data Diri
          </Link>
          <Link
            to="/change-password"
            className={`block px-4 py-2 rounded-lg ${isActive('/change-password')}`}
          >
            Ubah Kata Sandi
          </Link>
        </nav>
      </div>
      <div className="p-4 border-t">
        <h2 className="text-gray-600 font-semibold mb-2">INTEGRASI</h2>
        <nav className="space-y-2">
          <Link
            to="/account-integration"
            className={`block px-4 py-2 rounded-lg ${isActive('/account-integration')}`}
          >
            Google
          </Link>
        </nav>
      </div>
    </div>
  );
};