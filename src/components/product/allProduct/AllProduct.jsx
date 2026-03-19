import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';

// CSS Files Import

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';;
import FilterBar from '../filterBar/FilterBar'

function AllProduct() {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    // ====================Get Data From API====================   
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

    // ====================Search Function====================

    const searchTerm = (searchInput) => {
        let newData = [...allData];
        console.log(newData, 'newData')
        if (searchInput.length != '') {
            console.log(searchInput, 'values')
            const result = newData.filter((item) => {
                return item.title.toLowerCase().includes(searchInput.toLowerCase());
            });
            setFilteredData(result);
        } else {
            setFilteredData(allData)
        }

    }


    //===========================Category===========================
    const categorySelect = (categoryValue) =>{
        let newData = [...allData];
        // let newData = filteredData
        console.log(newData, 'newData')
        if (categoryValue.length != '') {
            console.log(categoryValue, 'values')
            const result = newData.filter((item) => {
                return item.category.toLowerCase().includes(categoryValue.toLowerCase());
            });
            if(result.length > 0){
                setFilteredData(result);
            }else{
                setFilteredData(allData);
            }
        } else {
            setFilteredData(allData)
        }

            setCategory(allData)
        console.log(category)
    }
    

    // console.log(,'ddd')


    return (
        <>
            <div>
                <FilterBar onSearch={searchTerm}  onCategory={categorySelect}/>
                <div className="slider-container flex flex-wrap justify-center   ">
                    {filteredData.length > 0 ? filteredData.map((item) => (
                        <div key={item.id} className="p-3">
                            <div className="group bg-white w-72 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                                {/* Image Container */}
                                <div className="relative bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
                                    <img
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



