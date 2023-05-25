class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
  
    render() {
      const li = document.createElement(`li`);
      const comment = document.createElement(`button`);
      const book = this; // save a reference to this Book object
      comment.id = `comment`;
      comment.innerText = `Comment`;
      comment.addEventListener(`click`, function() {
        const textArea = document.createElement(`textarea`);
        textArea.id = `textArea`;
        textArea.placeholder = `Enter your comment`;
        li.appendChild(textArea);
  
        const submitButton = document.createElement(`button`);
        submitButton.id = `submitButton`;
        submitButton.innerText = `Submit`;
        submitButton.addEventListener(`click`, function() {
          const commentText = textArea.value;
          const commentTextSaved = document.createTextNode(`Reader comment: ${commentText}`)
          commentTextSaved.id = `commentTextSaved`;
          li.appendChild(commentTextSaved);
          console.log(commentText);
          // Clear the text area
          textArea.value = '';
          li.removeChild(submitButton);
          li.removeChild(textArea);
        });
  
        li.appendChild(submitButton);
      });
      li.textContent = this.title;
      li.appendChild(comment);
      return li;
    }
  }

    // addComment() {
    //   const textArea = document.createElement(`textarea`);
    //   textArea.placeholder = `Enter your comment`;
    // console.log(addComment())


      // const submitButton = document.createElement(`button`);
      // submitButton.innerText = `Submit`;

      // submitButton.addEventListener(`click`, function() {
      //   const commentText = textArea.value;
      //   return commentText;
      //})


