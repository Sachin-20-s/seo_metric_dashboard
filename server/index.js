const express=require('express');
const cors=require('cors');
const app=express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      process.env.CLIENT_ORIGIN,      
      'http://localhost:3000'         
    ]
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} | ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/health', (_req, res) => res.send('Backend is alive'));
app.get('/head', (_req, res) => res.send('Backend is alive'));

app.post('/business-data',(req,res)=>{
    const {name,location}=req.body;
    const rating=(Math.random()*1.5+3.5).toFixed(1);
    const reviews=Math.floor(Math.random()*200)+30;
    const headline=`Why ${name} is ${location}'s Top spot in 2025`;
    res.json({rating,reviews,headline});
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  const headlines = [
    `Why ${name} is ${location}'s Hidden Gem `,
    `${name}: Redefining Excellence in ${location}`,
    `Top 5 Reasons ${location} Loves ${name}`,
    `Discover the Magic of ${name} in ${location}`,
    `${name} – A Must-Visit Place in ${location} This Year`
  ];

  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
