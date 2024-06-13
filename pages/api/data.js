import { connectToDatabase } from '../../mongodb'; // Adjust path as needed

export default async function handler(req, res) {
    // Connect to MongoDB if not already connected
    if (!client.isConnected()) {
        await connectToDatabase();
    }

    const db = client.db('Paatee'); // Replace with your database name
    const collection = db.collection('newUser'); // Replace with your collection name

    // Handle POST and GET requests
    if (req.method === 'POST') {
        // Handle POST request logic here
        const data = req.body;
        const result = await collection.insertOne(data);
        res.status(201).json({ message: 'Data inserted successfully!', data: result.ops[0] });
    } else if (req.method === 'GET') {
        // Handle GET request logic here
        const data = await collection.find().toArray();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }

    const cors = require('cors');

app.use(cors({
    origin: 'http://your_frontend_domain', // Replace with your frontend domain
    credentials: true, // If you're sending cookies
}));

}
