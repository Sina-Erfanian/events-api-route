import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.userValue;

    try {
      // connecting to our database
      const client = await MongoClient.connect(
        "mongodb+srv://sina_ern:sina.er1381@cluster0.b0mokvu.mongodb.net/events?retryWrites=true&w=majority"
      );

      // getting access to the database
      const db = client.db();

      // inserting one document to our emails collection
      await db.collection("emails").insertOne({ email: userEmail });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Connecting failed!" });
      return;
    }

    console.log(newsMessage);
    res.status(201).json({ message: "Signed Up!" });
  }
}

export default handler;
