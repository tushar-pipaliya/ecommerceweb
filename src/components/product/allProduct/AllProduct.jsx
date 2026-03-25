import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';

// CSS Files Import

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';;
import FilterBar from '../filterbar/FilterBar'

function AllProduct() {
    const navigate = useNavigate();
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    // 1. Ek j state ma badhu manage karo
    const [filters, setFilters] = useState({
        search: '',
        category: 'All Categories',
        sort: ''
    });
    //     // ====================Get Data From API====================   
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json();
            setAllData(jsonData);
            setFilteredData(jsonData)
            // setMessage(false)
        } catch (err) {
            console.error("Error fetching data:", err);
            // setMessage(true)
        }
    };
    console.log(allData)

    //     // 2. Main Magic: Jyare filters object badlay tyare aa execute thase
    useEffect(() => {
        let result = [...allData]; // Original data ni copy banavo
        console.log(result, 'result-----1')
        // A. Category check karo
        if (filters.category !== 'All Categories') {
            // debugger;
            result = result.filter(item => item.category === filters.category);
            console.log(result, 'Categories')
        }

        // B. Search check karo
        if (filters.search !== '') {
            result = result.filter(item =>
                item.title.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        // C. Sorting check karo
        if (filters.sort === 'High') {
            debugger;
            result.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'Low') {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredData(result); // Final filtered data display mate set karo
    }, [filters]); // Aa banne badlay tyare filter thase

    // 3. Child (FilterBar) mathi data lava mate nu function
    const updateFilters = (key, value) => {
        setFilters(prev => ({
            ...prev,     // Juni values rakho (search, sort etc.)
            [key]: value // Fakt je badlayu hoy tene update karo (jem ke category)
        }));
    };


    // ======= view Details =====
    const handleCardClick = (id) => {
        navigate(`/view-details/${id}`);
    };

    return (
        <>
            <div className='bg-gray-50'>
                <h2 className="text-3xl font-bold text-center pt-3 text-gray-800 mb-8 ">Our Products</h2>

                <FilterBar onFilterChange={updateFilters} />
                <div className="slider-container flex flex-wrap justify-center   ">
                    {filteredData.length > 0 ? filteredData.map((item) => (
                        <div key={item.id} className="p-3">
                            <div className="group bg-white w-72 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                                {/* Image Container */}
                                <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                                    <img
                                        onClick={() => handleCardClick(item.id)}
                                        src={item.image}
                                        className="w-40 h-48 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                        alt={item.title}
                                    />
                                </div>
                                {/* Content Section */}
                                <div className="p-5">
                                    <h6 className="mt-2 text-gray-800 font-bold truncate ">
                                        {item.title}
                                    </h6>
                                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <div className='flex items-center justify-between'>
                                        <Rating
                                            name="text-feedback"
                                            value={item.rating.rate}
                                            readOnly
                                            precision={0.5}
                                            size="small"
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />Count: ({item.rating.count})
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-xl font-bold text-gray-900">₹{item.price}</p>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out mt-4 px-3 py-1 bg-blue-500 text-white rounded-full">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : <div className='h-90 w-full flex items-center justify-center'>
                        <h2 className='text-2xl'>
                            Data Not Found
                        </h2>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default AllProduct



