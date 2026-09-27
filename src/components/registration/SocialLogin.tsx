import { Button } from '@/components/ui/button';

export const SocialLogin = () => {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-600">
        atau daftar dengan
      </p>
      <div className="mt-3 flex justify-center space-x-4">
        <Button variant="outline" className="w-full" onClick={() => window.location.href = 'http://localhost:8000/api/auth/google/redirect'}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-6 h-6 mr-2" />
          Google
        </Button>
        <Button variant="outline" className="w-full" onClick={() => window.location.href = 'http://localhost:8000/api/auth/facebook/redirect'}>
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook logo" className="w-6 h-6 mr-2" />
          Facebook
        </Button>
      </div>
    </div>
  );
};