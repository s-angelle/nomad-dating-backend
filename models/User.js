const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 12

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: String,
    active: Boolean,
    image: {
         type: String,
      },
    about: {
        type: String,
        required: true 
     },
    shoppingCart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cart'
        }
    ]
}, {
    timestamps: true,
    toJSON: {
        // ret is the JSON'ed User Document
        transform: function(doc, ret) {
            // We don't want to return the password back to the client
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // This will only hash the password for our newly created user
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)












