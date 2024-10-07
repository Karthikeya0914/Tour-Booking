import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log(featuredTours);

  if (loading) {
    return <h4 className='text-center'>Loading.......</h4>;
  }

  if (error) {
    return <h4 className='text-center'>Error: {error.message}</h4>;
  }

  return (
    <>
      {!error &&
        !loading &&
        featuredTours.map((tour) => (
          <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;