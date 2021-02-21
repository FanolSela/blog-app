const Post = require('../models/posts')
const db = require('../connection/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = [
    {
      title: 'Tutorials lol',
      imgURL: 'https://pbs.twimg.com/media/EdXGQguXgAA6VlX.jpg',
      content: 'Becareful about tutorials, before you know, you\'ll be in stuck in there for eternity.',
    },
    {
      title: 'Painful Humor',
      imgURL: 'https://inteng-storage.s3.amazonaws.com/img/iea/yrwQvLJbON/sizes/programmer-memes_md.jpg',
      content: 'Ahh yes, this is soo relatable that I experience this on a daily.',
    },
    {
      title: 'Work',
      imgURL: 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes.jpg',
      content: 'I tap out after writing a complete if statement.',
    },
    {
      title: 'Terminalz',
      imgURL: 'https://pbs.twimg.com/media/EXUgmSsXQAAlWg7.jpg',
      content: 'My family always think I\'m hacking the goverment when I\'m in the GUI.'
    },
    {
      title: 'Errors',
      imgURL: 'https://img.devrant.com/devrant/rant/r_1825530_6oF8Q.jpg',
      content: 'I don\'t whether to be happy or sad whenever I have an error.'
    },
    {
      title: 'Python memes',
      imgURL: 'https://s3.amazonaws.com/discourseproduction/original/2X/a/ac90918fff22e7fa69bd3c90d2a62bf10e7e2435.jpeg',
      content: 'Python is soo nice to me, C++ always gives me the scary look.'
    },
  ]
  await Post.insertMany(posts);
  console.log("Created posts!")
}

const run = async () => {
  await main();
  db.close();
}
run()