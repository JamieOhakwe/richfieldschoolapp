import mongoose from 'mongoose'


const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });
        console.log('Connected to MongoDB');
    } catch (error) {
        throw new Error('Something went wrong')
        console.log(error);

    }
} 
export default connect;