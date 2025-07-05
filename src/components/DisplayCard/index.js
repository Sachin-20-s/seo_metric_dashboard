import { useState } from 'react';
import useBusinessStore from '../../store/useBusinessStore';
import ReviewStatsCard from '../ReviewStatsCard';
import RatingPieChart from '../RatingPieChart';
import { Star } from 'lucide-react';
import HeadlineCard from '../HeadlineCard';

const API =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

function DisplayCard() {
  const { name, location, rating, reviews, headline, updateHeadline } = useBusinessStore();
  const [loading, setLoading] = useState(false);

  const regenerateHeadline = async () => {
    try {
      setLoading(true);
      const r = await fetch(
        `${API}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
      );
      if (!r.ok) throw new Error('Server error');
      const { headline } = await r.json();
      updateHeadline(headline);
    } catch {
      alert('Oops! Could not fetch data.');
    } finally {
      setLoading(false);
    }
  };

  if (!rating) return null; 

  return (
    <div className="w-full max-w-md mx-auto mt-6 bg-gray-100 p-4 rounded shadow">
      <div className="w-full flex flex-col items-center">
      {rating && <RatingPieChart rating={rating} />}
      <div className="flex items-center gap-2 text-yellow-500 text-lg font-semibold mb-2">
        <Star className="w-5 h-5" />
        <span>{rating} / 5</span>
      </div>
      {reviews && <ReviewStatsCard reviews={reviews} />}
      {headline && <HeadlineCard headline={headline} />}
    </div>
      <button
        onClick={regenerateHeadline}
        className="text-blue-500 mt-2 underline flex items-center gap-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? (
          <span className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        ) : (
          'Regenerate Headline'
        )}
      </button>
    </div>
  );
}

export default DisplayCard;
