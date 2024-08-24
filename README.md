# Blogify

Welcome to **Blogify**, a simple and intuitive blogging platform where users can share their thoughts, read posts, and engage in discussions. Whether you're signed in or just browsing, Blogify offers a seamless experience for both authors and readers.

## Features

- **User Authentication**: Secure login and signup functionality to protect user data.
- **Blog Creation**: Signed-in users can create and publish their own blog posts.
- **Read Blogs**: Anyone can read blogs, whether they have an account or not.
- **Commenting**: Signed-in users can comment on blog posts, fostering interaction and discussion.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Templating Engine**: EJS

## Installation

To get a local copy of Blogify up and running, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/satwikkini-01/blogify.git
    cd blogify
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=3000
    MONGO_URL=your_mongodb_connection_string
    SECRETKEY=your_secret_key
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

   Visit `http://localhost:3000` in your browser to view the app.

## Usage

- **Sign Up / Log In**: Create an account or log in to start creating blogs and commenting on posts.
- **Create a Blog**: After logging in, navigate to the "Create Blog" section to write and publish your posts.
- **Browse Blogs**: Explore the latest posts from various authors on the homepage.
- **Comment on Posts**: Engage with the community by commenting on blogs you find interesting.

## Contributing

Contributions are welcome! If you have any ideas to improve Blogify or find any bugs, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


## Acknowledgements

- This project was inspired by a tutorial series on YouTube. Special thanks to the content creator Piyush Garg for their guidance.
- Thanks to the open-source community for the amazing tools and libraries that made this project possible.
