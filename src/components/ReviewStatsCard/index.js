import { MessageSquare } from 'lucide-react';

function ReviewStatsCard({ reviews }) {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow flex flex-col items-center gap-2 p-4 mb-2">
      <div className="flex items-center gap-2 text-gray-600">
        <MessageSquare className="w-5 h-5" />
        <span>{reviews} Reviews</span>
      </div>
    </div>
  );
}

export default ReviewStatsCard;
