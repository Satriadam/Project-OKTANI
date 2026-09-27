import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Phone } from 'lucide-react';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    if (formData.password.length < 6) {
      setErrors({ password: ['Password harus minimal 6 karakter'] });
      setLoading(false);
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setErrors({ password_confirmation: ['Konfirmasi password tidak cocok'] });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      const { user, token } = response.data;

      toast({
        title: 'Registrasi berhasil',
        description: `Selamat datang, ${user.name}!`,
      });

      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        toast({
          variant: 'destructive',
          title: 'Terjadi kesalahan',
          description: 'Coba lagi nanti.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                className="pl-10"
                value={formData.name}
                onChange={handleChange}
                required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-10"
                value={formData.email}
                onChange={handleChange}
                required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
                type="tel"
                name="phone"
                placeholder="Nomor Telepon"
                className="pl-10"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
                type="password"
                name="password"
                placeholder="Password"
                className="pl-10"
                value={formData.password}
                onChange={handleChange}
                required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
                type="password"
                name="password_confirmation"
                placeholder="Konfirmasi Password"
                className="pl-10"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
            />
            {errors.password_confirmation && (
                <p className="text-red-500 text-sm mt-1">{errors.password_confirmation[0]}</p>
            )}
          </div>

          <p className="text-sm text-gray-500">
            Minimal 6 karakter, kombinasi huruf dan angka
          </p>
        </div>

        <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover"
            disabled={loading}
        >
          {loading ? 'Memproses...' : 'Daftar'}
        </Button>
      </form>
  );
};