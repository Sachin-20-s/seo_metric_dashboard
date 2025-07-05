import { useState } from 'react';
import useBusinessStore from "../../store/useBusinessStore";

function BusinessForm() {
  const {
    name, location, checkName, checkLocation,
    setCheckName, setCheckLocation, setName, setLocation, updateBusinessData
  } = useBusinessStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const nameMissing = !name.trim();
    const locMissing  = !location.trim();
    setCheckName(nameMissing);
    setCheckLocation(locMissing);
    if (nameMissing || locMissing) {
        updateBusinessData({});
        return ;
    }

    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location })
      });
      if (!res.ok) throw new Error('Server error');
      updateBusinessData(await res.json());
    } catch {
      alert('Oops! Could not fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-full sm:max-w-lg md:max-w-xl mx-auto bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <input
          className={`w-full border p-2 rounded ${(!checkName?'mb-3':'')}`}
          placeholder="Business Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {checkName && <p className={`text-red-500 mt-1 mb-2 text-xs`}>Required*</p>}

        <input
          className={`w-full border p-2 rounded ${(!checkLocation?'mb-3':'')}`}
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        {checkLocation && <p className="text-red-500 mt-1 mb-2 text-xs">Required*</p>}

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-3 rounded w-1/2 mx-auto flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading && (
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {loading ? 'Fetching…' : 'Get Business Data'}
        </button>
      </form>
    </div>
  );
}

export default BusinessForm;
