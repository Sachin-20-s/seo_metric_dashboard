import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#4ade80', '#facc15'];

function RatingPieChart({ rating }) {
  const data = [
    { name: 'Positive', value: Number(rating) },
    { name: 'Remaining', value: 5 - Number(rating) },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%" cy="50%"
          innerRadius={50} outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </div>
  );
}

export default RatingPieChart;
