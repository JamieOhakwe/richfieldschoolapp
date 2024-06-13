import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://jamie:9kgPkaTHlr3kseko@paatee0.0ipwurq.mongodb.net/Paatee?retryWrites=true&w=majority'
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
