import { MongoClient } from 'mongodb';

// const uri = 
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectToDatabase;
