

import clsx from 'clsx';
import css from './PhotosGalleryItem.module.css'


export default function PhotosGalleryItem({ oneImage}) {

  return (
    <div
    className={clsx(css.thumb)}
    style={{ backgroundColor: oneImage.avg_color, borderColor: oneImage.avg_color }}
  >
    <img src={oneImage.src.large} alt={oneImage.alt} />
  </div>
)
};

