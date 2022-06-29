const Profile = require('../../models/Profile');

// Find all profiles
const index = async (req, res) => {
    try {
        const profiles = await Profile.find({})
        res.status(200).json(profiles)
    } catch (e){
        res.status(400).json({msg: e.message})
    }

};

// Create a profile
const create =  async (req, res) => {
    try {
        const createdProfile = await Profile.create(req.body)
        res.status(200).json(createdProfile)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Update a profile

const update =  async (req, res) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedProfile)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

// Delete a profile

const remove =  async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedProfile)
    } catch (e){
        res.status(400).json({msg: e.message})
    }
} 

module.exports = {
    index,
    create,
    update,
    remove
}