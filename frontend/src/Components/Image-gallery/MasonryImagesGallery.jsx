import React from 'react'
import Mansonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'


const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Mansonry gutter='1rem'>
            {
                galleryImages.map((item,index)=>(
                    <img className='masonry__Img' src={item} alt="" key={index} style={{'width':'100%','height':'100%','borderRadius':'10px','display':'block'}}/>
                ))
            }
        </Mansonry>

    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
