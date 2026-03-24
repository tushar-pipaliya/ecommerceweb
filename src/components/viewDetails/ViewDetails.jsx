import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { ArrowBack, Close, ShoppingBag } from '@mui/icons-material';

function ViewDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (err) {
                console.error("Error:", err);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="flex h-screen items-center justify-center text-gray-500 text-lg">Loading...</div>;
    if (!product) return <div className="text-center p-20 text-xl text-gray-600">Product not found!</div>;

    return (
        <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
            {/* Minimal Header */}
            <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-gray-500 hover:text-black transition-all"
                >
                    <ArrowBack fontSize="small" /> Back
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="text-gray-400 hover:text-red-500 transition-all"
                >
                    <Close />
                </button>
            </div>

            <main className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left: Product Image */}
                    <div className=" bg-white rounded-2xl p-10 flex items-center justify-center border border-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[450px] w-full object-contain"
                        />
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">
                            {product.category}
                        </span>

                        <h1 className="text-3xl font-bold mb-4 leading-snug">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-3 mb-3">
                            <Rating value={product.rating?.rate || 0} readOnly precision={0.5} size="small" />
                            <span className="text-gray-400 text-sm">({product.rating?.count} reviews)</span>
                        </div>



                        <div className="border-t border-gray-100 pt-3 mb-10">
                            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                {product.description}
                            </p>
                        </div>
                        <div className="mb-8 flex items-center justify-between">
                            <span className="text-3xl font-semibold text-blue-500">₹{product.price}</span>
                      
                            <button className="cursor-pointer transition-opacity duration-500 ease-in-out px-3 py-1 bg-blue-500 text-white rounded-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default ViewDetails;