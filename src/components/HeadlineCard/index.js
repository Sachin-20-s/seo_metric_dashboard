import { Megaphone } from 'lucide-react';

function HeadlineCard({ headline }) {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow p-4 flex items-start gap-3 mb-2">
      <Megaphone className="text-blue-600 w-5 h-5 mt-1" />
      <div className="flex flex-col">
        <p className="text-sm text-gray-500 font-medium">SEO Headline</p>
        <p className="text-lg font-semibold text-gray-800">{headline}</p>
      </div>
    </div>
  );
}

export default HeadlineCard;
