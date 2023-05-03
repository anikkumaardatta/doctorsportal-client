import React from 'react';

const TestimonialCard = ({testiData}) => {
    const {photo, fName, location, message} = testiData;
    return (
        <div className="swiper-slide">
          <blockquote className="bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Dog"
                src={photo}
                className="h-12 w-12 rounded-full object-cover outline outline-offset-2 outline-secondary"
              />

              <div className="text-lg">
                <p className="font-medium">{fName}</p>
                <p className="font-normal text-sm">{location}</p>
              </div>
            </div>

            <div className="relative mt-4 text-gray-500">
              <span className="text-xl">&ldquo;</span>

              {message.slice(0,300)}

              <span className="text-xl">&rdquo;</span>
            </div>
          </blockquote>
        </div>
    );
};

export default TestimonialCard;