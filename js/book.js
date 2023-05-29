class Book {
    constructor(author, language, subject, title) {
      this.author = author;
      this.language = language;
      this.subject = subject;
      this.title = title;
    }
  
    // I found something similar online to modify the issue of the comments happening mutliple times
    // but I'm not sure why this works compared to what my code was doing. If I could get some 
    // clarification on that I would be extremely grateful.
    render() {
      const book = document.createElement('div');
      const title = document.createElement('div');
      const commentSection = document.createElement('div');
      const commentBtn = document.createElement('button');
      const commentTextArea = document.createElement('textarea');
      const commentSubmitBtn = document.createElement('button');
    
      book.id = `book`;
    
      title.id = `title`;
      title.textContent = this.title;
    
      commentBtn.id = 'comment';
      commentBtn.textContent = 'Comment';

      commentTextArea.maxlength = 280;

      commentSubmitBtn.textContent = `Submit`;
    
      commentSection.appendChild(commentBtn);
    
      const submitComment = function() {
        const comment = document.createElement('p');
        comment.textContent = `Reader Comment: ${commentTextArea.value}`;
        commentSection.appendChild(comment);
    
        commentTextArea.value = '';
    
        commentSection.removeChild(commentTextArea);
        commentSection.removeChild(commentSubmitBtn);
    
        commentSection.appendChild(commentBtn);
        commentBtn.removeEventListener('click', showTextArea);
        commentBtn.addEventListener('click', showTextArea);
      };
    
      const showTextArea = function() {
        commentSection.removeChild(commentBtn);
    
        commentSection.appendChild(commentTextArea);
    
        commentSection.appendChild(commentSubmitBtn);
        commentSubmitBtn.addEventListener('click', submitComment);
      };
    
      commentBtn.addEventListener('click', showTextArea);
    
      book.appendChild(title);
      book.appendChild(commentSection);
    
      return book;
    }
  }

//   render() {
//     const book = document.createElement('div');
//     const title = document.createElement('div');
//     const commentSection = document.createElement('div');
//     const commentBtn = document.createElement('button');
//     const commentTextArea = document.createElement('textarea');
//     const commentSubmitBtn = document.createElement('button');
  
//     book.id = `book`;

//     title.id = `title`;
//     title.textContent = this.title;
  
//     commentBtn.id = 'comment';
//     commentBtn.textContent = 'Comment';
//     commentBtn.addEventListener('click', function() {
//       commentSection.appendChild(commentTextArea);
//       commentSection.removeChild(commentBtn);
  
//       commentSubmitBtn.textContent = 'Submit';
//       commentSubmitBtn.addEventListener('click', function() {
//         const comment = document.createElement('p');
//         comment.textContent = `Reader Comment: ${commentTextArea.value}`;
//         commentSection.appendChild(comment);
  
//         commentSection.removeChild(commentTextArea);
//         commentSection.removeChild(commentSubmitBtn);
//         commentSection.appendChild(commentBtn);
//       });
  
//       commentSection.appendChild(commentSubmitBtn);
//     });
  
//     commentSection.appendChild(commentBtn);
  
//     book.appendChild(title);
//     book.appendChild(commentSection);
  
//     return book;
//   }
// } I had this code originally but the comments after the first one were being multiplied, ie the 2nd comment showed up
// 2x and the 3rd 3x etc.


