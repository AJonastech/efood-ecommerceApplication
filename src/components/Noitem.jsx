import React from 'react'
import { Link } from 'react-router-dom'

function Noitem({emptyImg}) {
    return (
        <div className="flex flex-col items-center">
        <div className="">
          <img
            className="w-[170px] md:h-[230px] h-[170px] object-cover"
            src={emptyImg}
            alt="No Cart product Img"
          />
        </div>
        <div>
          <p className="text-lg text-center mb-3 mt-8 md:text-xl">
            Dear Esteemed Customer, you have not added any item to your
            cart.
          </p>
          <Link to="/">
            <p className="underline uppercase text-center ">
              Please Visit the HomePage to do so
            </p>
          </Link>
        </div>
      </div>
    )
}

export default Noitem
