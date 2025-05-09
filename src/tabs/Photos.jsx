import Text from '../components/Text/Text';

import Form from '../components/Form/Form'
import PhotosGallery from '../components/PhotosGallery/PhotosGallery'
import { useState, useEffect } from 'react';
import { getPhotos } from '../apiService/photos.js'
import Button from '../components/Button/Button'
import Loader from '../components/Loader/Loader'



export default function Photos() {

    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        async function fetchArticles() {
            if(query !== "") {
                const result = await getPhotos(query, page);

                setImages(prevImages => [...prevImages, ...result.photos]);
            }
            setIsLoading(false);
        }
        fetchArticles();



    }, [query, page]);

    const getQuery = inputValue => {
      console.log(inputValue); // має вивести значення інпуту під час сабміту форми

      setQuery(inputValue);
      setImages([]);
      setPage(1);

    };

    const loadMore = () => {
        setPage(page + 1);

    };



    return (
      <>
        <Form onSubmit={getQuery} />
        <PhotosGallery imagesProp={images}/>
        {images.length !== 0 &&
        <Button children={'Load More'} onClick={loadMore} disabled={false}   />


        }
        {isLoading && <Loader/>}
      </>
    );
  };