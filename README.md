# Next.js Authentication App

Explore a Next.js application designed to seamlessly integrate user authentication, providing a secure and intuitive user experience. This repository contains a fully functional Next.js project featuring a robust authentication system, complete with login, logout, and signup functionalities. Utilizing modern technologies such as Axios for API requests and react-hot-toast for elegant notifications, this app showcases best practices in handling user sessions and protecting routes.

## Key Features

- **Secure Authentication Flow**: Implementing a streamlined login and signup process, ensuring user credentials are handled securely. Passwords are encrypted using `bcryptjs` before storing in the database.
- **Email Confirmation**: Utilizing `Nodemailer` and `Mailtrap` to send email confirmations during the signup process, enhancing security and user verification.
- **Session Management**: Efficiently managing user sessions, with seamless integration of logout functionality to ensure user data protection.
- **Interactive UI**: Leveraging Tailwind CSS for a beautifully designed, responsive user interface that enhances usability and user engagement.
- **Client-Side Navigation**: Utilizing Next.js's built-in routing capabilities to provide a smooth, SPA-like experience across the authentication pages.
- **Toast Notifications**: Integrating `react-hot-toast` to display informative success and error messages, improving the overall user interaction.
- **Profile Management**: A dedicated profile page that allows users to view their details, reinforcing the app's authentication capabilities.
- **Data Storage**: Using MongoDB Atlas as the database solution for storing user details securely and efficiently.

Whether you're looking to implement authentication in your Next.js project or seeking inspiration for creating engaging user interfaces with Tailwind CSS, this repository offers valuable insights and practical code examples. Dive into the code to discover how to build secure, scalable, and user-friendly web applications with Next.js.

## Screenshots
- Sign Up
  ![tuxpi com 1712470719](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/75e42e47-e09f-4178-9830-6f51dd757839)

- Verify Email
  ![tuxpi com 1712472322](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/4d8c5b0b-d904-4d69-ad78-77dc39db1b48)

- Successful Email Verification
![tuxpi com 1712474775](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/230897ea-56a3-4564-a642-0fde4d355fe8)

- Failed to Verify Email
 ![tuxpi com 1712474721](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/77edc349-b923-4f88-988f-f6ad51190296)

- Login
  ![tuxpi com 1712470649](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/8de32408-99f8-4a2c-8847-50fef069897e)

- Profile
  ![tuxpi com 1712470785](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/e1475e48-f55f-44e4-b141-8a745ae43845)

- Profile Details
  ![tuxpi com 1712470849](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/0b0cb8e3-e77e-41e9-81bf-71c51ceca81f)

- Home Page which can be accessed after successful login
  ![tuxpi com 1712470887](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/4d61665f-b48b-4a9e-9009-90a8d449923d)

- Toast message on the top
![tuxpi com 1712471311](https://github.com/RAVIGANESHMBHAT/NextJS-Authentication/assets/41186067/dd70a8ef-e7ef-405b-89ba-4107d0b9e7a7)

## Getting Started

To get a local copy up and running follow these simple steps.
1. Clone the repo
```bash
git clone https://github.com/RAVIGANESHMBHAT/NextJS-Authentication.git
```

2. Go to the project folder
```bash
cd NextJS-Authentication
```

3. Install NPM packages
```bash
npm install
```
or
```bash
yarn install
```

4. Create `.env` file and enter valid data. (Refer to `.env.sample` file)

5. Run the development server
```bash
npm run dev
```
or
```bash
yarn dev
```

## Useful links
- NextJS - https://nextjs.org/docs/getting-started/installation
- Mailtrap - https://mailtrap.io/signin
- Nodemailer - https://www.nodemailer.com/
- MongoDb Atlas - https://www.mongodb.com/cloud/atlas/register
