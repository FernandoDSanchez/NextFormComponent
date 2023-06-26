React Form Builder with Firebase Integration
This project is a flexible, dynamic form builder component in React that works seamlessly with Firebase Firestore and Storage.

The main feature of this project is a reusable form component that takes a configuration object. This object includes an array of input fields (each defined by its own object) with a range of customizable properties, including input type (text, image, select), placeholder text, title, and validation rules like 'required', 'maxLength' for text or 'maxSize' for files. This makes the form builder highly adaptable and versatile for a range of use-cases.

All form data is stored securely in a specified Firestore collection, with image files saved separately in Firebase Storage, making it easy to manage and organize data.

Features
Dynamic forms generation: Generate form based on configuration object.
Customizable input properties: Define properties like type, placeholder, title, and validation rules.
Firebase Firestore integration: Form data is saved in a Firestore collection.
Firebase Storage integration: Image files are stored in Firebase Storage.
Installation
Please refer to the Installation Guide for detailed installation instructions.
