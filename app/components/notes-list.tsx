const fetchNotes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = [
    {
      id: 1,
      title: "No1",
      content: "Content1",
    },
    {
      id: 2,
      title: "No2",
      content: "Content2",
    },
  ];

  //   const res = await fetch(api, {
  //     cache: "no-cache",
  //   });

  return res;
};

const NotesList = async () => {
  const notes = await fetchNotes();
  return (
    <div>
      <p className="my-4 pd-3 test-xl font-medium underline underlineline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
