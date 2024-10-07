import Booking from "../models/Booking.js";

//create booking
export const createBooking=async(req,res)=>{
    const newBooking = new Booking({...req.body })

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({ success: true, message: 'Your tour is booked', data: savedBooking })

    } catch (error) {
        res.status(500).json({ success: true, message: 'Failed to book. Try again' })

    }
}

//get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id);
        if (!book) {
            res.status(404).json({ success: false, message: 'Booking not found' })
        } else {
            res.status(200).json({ success: true, message: 'Successful', data: book })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }   
}
//get all bookings
export const getAllBooking=async(req,res)=>{
    try {
        const books=await Booking.find();
        res.status(200).json({ success: true, message: 'Successful', data: books })

    } catch (error) {
        res.status(500).json({ success: true, message: 'Error' })

    }   

}