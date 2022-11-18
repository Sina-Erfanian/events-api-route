function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    const newComment = {
      name,
      text,
      email,
      eventId,
    };

    console.log(newComment);

    res.status(201).json({ message: "Added Comment.", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Sina",
        text: "A First Comment!",
      },
      {
        id: "c2",
        name: "Max",
        text: "A Second Comment!",
      },
    ];
    res.status(200).json({ comment: dummyList });
  }
}

export default handler;
