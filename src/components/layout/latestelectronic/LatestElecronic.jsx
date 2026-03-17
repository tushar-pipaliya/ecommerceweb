import React from 'react'

function LatestElecronic() {
     const [latest, setLatest] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json();
            setLatest(jsonData);
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
    
        fetchData();
      }, []);
      console.log(latest)
    
  return (
    <div>
      
    </div>
  )
}

export default LatestElecronic
