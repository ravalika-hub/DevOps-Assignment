import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://13.232.62.219:8000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error fetching message"));
  }, []);

  return (
    <div>
      <h1>Hello from frontend!</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}


