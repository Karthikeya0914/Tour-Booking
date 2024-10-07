import express from 'express'
// import Tour from '../models/Tour.js'
import {createTour,updateTour,deleteTour ,getSingleTour,getAllTour,getTourBySearch,getFeaturedTour,getTourCount} from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// create new tour
router.post('/',verifyAdmin, createTour)

// update  tour
router.put('/:id', verifyAdmin,updateTour)

// delete tour
router.delete('/:id', verifyAdmin,deleteTour)

// getsingle tour
router.get('/:id', getSingleTour)

// get All tour
router.get('/', getAllTour)

//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

//get feaatured tour
router.get('/search/getFeaturedTours', getFeaturedTour)

//get tour count
router.get('/search/getTourCount', getTourCount)






export default router;
