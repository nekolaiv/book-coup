var borrowedbooks = [ //{book ID, bookname, author, description, genres};
 	{id: 1,
 	 image: "BookCover.jpeg",
 	 name:"Harry Potter: The Philosoper's Stone",
 	 description:"an 11-year-old boy who discovers he is the son of a famous wizard and will attend hogwarts school of witchcraft and wizardry"}, //book1 
	{id:0,
	image: "NOTHING TO DISPLAY",
	name: "NOTHING TO DISPLAY"}, //book2
	];


function borrowed() {
	borrowedbooks.forEach((borrowedbook, index) => {
		const bookDiv = document.getElementById(`book${index + 1}`);
		const imageCover = bookDiv.querySelector(`#book-cover${index + 1}`);
		const bookName = bookDiv.querySelector(`#bookname${index + 1}`);
		const bookDescript = bookDiv.querySelector(`#book-description${index + 1}`);

		imageCover.src = borrowedbook.image;
		bookName.textContent = borrowedbook.name;
		bookDescript.textContent = borrowedbook.description;

	});
}
window.addEventListener('DOMContentLoaded', borrowed()); 
