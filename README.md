# React Form Builder with Firebase Integration

This project is a flexible, dynamic form builder component in React that works seamlessly with Firebase Firestore and Storage.

The main feature of this project is a reusable form component that takes a configuration object. This object includes an array of input fields (each defined by its own object) with a range of customizable properties, including input type (text, image, select), placeholder text, title, and validation rules like 'required', 'maxLength' for text or 'maxSize' for files. This makes the form builder highly adaptable and versatile for a range of use-cases.

All form data is stored securely in a specified Firestore collection, with image files saved separately in Firebase Storage, making it easy to manage and organize data.

Features
Dynamic forms generation: Generate form based on configuration object.
Customizable input properties: Define properties like type, placeholder, title, and validation rules.
Firebase Firestore integration: Form data is saved in a Firestore collection.
Firebase Storage integration: Image files are stored in Firebase Storage.
Installation
Please refer to the [Installation Guide](installation.md) for detailed installation instructions.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
