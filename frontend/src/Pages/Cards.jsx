import React, { useState, useEffect } from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Cards(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className='flex gap-6 flex-wrap ml-11 mt-11 '>
      {loading ? (
        <div className='flex flex-wrap gap-4 ml-11 mt-11'>
{ Data.map((_, index) => (
  <Skeleton key={index} className='h-40 w-60' />
))
}
</div>
      ) : (
        Data.map((val, index) => {
          return (
            <div key={index} className='w-60 drop-shadow-2xl r flex '>
              <Link href="#" className="group relative block overflow-hidden">
                <button
                  className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                  <span className="sr-only">Wishlist</span>
                </button>
                <img
                  src={val.img}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="relative border border-gray-100 bg-white p-6">
                  <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> {val.title}</span>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>
                  <p className="mt-1.5 text-sm text-gray-700">{val.price}</p>
                  <form className="mt-4">
                    <button onClick={props.addCart}
                      className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    >
                      Add to cart
                    </button>
                  </form>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cards;