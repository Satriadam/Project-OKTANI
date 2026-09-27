import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WeatherDisplay = () => {
  // This is a placeholder implementation. We'll integrate with a real weather API later
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex flex-col items-center">
          <Sun className="w-12 h-12 text-yellow-500 mb-2" />
          <h3 className="text-lg font-semibold">Suhu</h3>
          <p className="text-3xl font-bold">28°C</p>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex flex-col items-center">
          <Cloud className="w-12 h-12 text-gray-500 mb-2" />
          <h3 className="text-lg font-semibold">Kelembaban</h3>
          <p className="text-3xl font-bold">75%</p>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex flex-col items-center">
          <CloudRain className="w-12 h-12 text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold">Curah Hujan</h3>
          <p className="text-3xl font-bold">2.5 mm</p>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex flex-col items-center">
          <Wind className="w-12 h-12 text-green-500 mb-2" />
          <h3 className="text-lg font-semibold">Kecepatan Angin</h3>
          <p className="text-3xl font-bold">10 km/h</p>
        </div>
      </Card>
    </div>
  );
};