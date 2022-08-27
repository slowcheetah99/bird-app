import { faker } from "@faker-js/faker";

//generating comments for posts
const commentCount = Math.ceil(Math.random() * 20);
let comments = [];
for (let i = 0; i < commentCount; i++) {
  let commenter = {
    commentId: faker.datatype.uuid(),
    image: faker.image.animals(1234, 2345, true),
    name: faker.name.fullName(),
    username: faker.internet.userName(),
    body: faker.lorem.paragraph(),
    slug: faker.lorem.slug(),
    time: Date.now(),
    retweets: Math.ceil(Math.random() + 400),
    likes: Math.ceil(Math.random() * 1000),
  };
  comments.push(commenter);
}

const posts = [];

export const generatePosts = () => {
  for (let i = 0; i < 20; i++) {
    let post = {
      postId: faker.datatype.uuid(),
      image: faker.image.animals(1234, 2345, true),
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      post: faker.lorem.paragraph(),
      slug: faker.lorem.slug(),
      time: Date.now(),
      comments,
      retweets: Math.ceil(Math.random() * 400),
      likes: Math.ceil(Math.random() * 1000),
    };
    posts.push(post);
  }
  return localStorage.setItem("BIRD_APP_KEY", JSON.stringify(posts));
};

generatePosts();
