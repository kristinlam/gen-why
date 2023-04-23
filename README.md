# Gen-Why

Gen Why is a fullstack web application that showcases articles on the many things that millennials have alleged ruined, from the humorous to the bizarre. Visitors are welcome to explore the collection of curated articles or contribute their own suggestions.

# Features

### Funny Articles

Visitors can click on each link to visit an external news article. Be amazed at the range of industries and subjects milennials have been accused of ruining, sourced by visitors themselves.

![Homepage](/public/readme/homepage.png)

### Suggestions Form

Visitors can submit suggestions through a form, which requires inputting only a topic and link to an article. If the topic or article are already featured, the submission will not go through.

![Suggestion Form](/public/readme/suggest.png)

### User Authentication

User account creation and login are supported, but currently disabled. Only admins have accounts, with access to Express routes that allow them to approve and reject submissions.

![Admin Login](/public/readme/login.png)

### Admin Dashboard

Admins can login and approve or reject submissions through an easy-to-use dashboard. Approved suggestions will instantly appear on the website.

![Admin Dashboard](/public/readme/dashboard.png)

# Tech Stack

- React for the front-end user interface
- Redux for state management
- Express as the server-side framework
- Sequelize as the ORM for managing the database
- PostgreSQL as the database
- Tailwind CSS for styling and layout
- Bcrypt and Json Web Tokens for user authentication and security
- Framer Motion for animations
