
import React, { useState } from "react";
import Categories from "./Categories";

const AllCourses = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <h1 className="text-center font-bold text-3xl text-blue-500 mb-4">Explore Our Courses...</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap mt-5">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => filterResult("Programming language")}
            >
              Programming language
            </button>
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => filterResult("Trending technology")}
            >
              Trending technology
            </button>
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => filterResult("Interview preparation")}
            >
              Interview preparation
            </button>
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => filterResult("Database")}
            >
              Database
            </button>
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => filterResult("CS Subject")}
            >
              CS Subjects
            </button>
            <button
              className="btn btn-warning rounded-md bg-amber-500 w-full mb-4"
              onClick={() => setData(Categories)}
            >
              All
            </button>
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap justify-center">
              {data.map((values) => {
                const { id, title, img, durationhrs, durationmins, reviews } = values;
                return (
                  <div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border rounded-md mb-4 transition-transform transform hover:-translate-y-4"
                    key={id}
                  >
                    <div className="card h-full flex flex-col">
                      <img
                        src={img}
                        className="w-full h-44 object-contain"
                        alt={title}
                      />
                      <div className="card-body p-4 flex flex-col flex-grow">
                        <h5 className="card-title text-lg font-bold">
                          {title}
                        </h5>
                        <h6 className="text-gray-600 text-sm font-normal">
                          {durationhrs} hours {durationmins} minutes
                        </h6>
                        <div className="review mt-2">
                          <p className="text-gray-600 text-sm font-normal">{reviews} Reviews</p>
                        </div>
                        <div className="mt-auto flex justify-center items-center">
                          <button className="bg-yellow-500 w-2/3 rounded-md">
                            Enroll now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
