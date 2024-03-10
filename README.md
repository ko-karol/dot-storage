# dot-storage
`dot-storage` is a JavaScript library that provides an abstraction over the `localStorage` and `sessionStorage` APIs, allowing developers to interact with these storage mechanisms in a more intuitive and consistent manner.
It encapsulates the complexity of serialization and deserialization, providing a simple interface for storing and retrieving data.

## Installation

...coming soon.

For now, you can install typescript and use the magic of ctrl + c, ctrl + v.

## Features
- **Unified API**: Use the same methods regardless of whether you're using `localStorage` or `sessionStorage`.
- **Automatic Serialization**: Data is automatically serialized to JSON before being stored and deserialized upon retrieval.
- **Lightweight**: This library is very tiny (~200kb)
- **Lightning-fast**: This library is also very fast. ⚡🚗
- **Customizable Options**: Allows customization of storage behavior through optional configuration options.

## Why?
1. Have you ever wanted to interact with web storage apis differently? now you can ✨✨
2. Reduces boilerplate code associated with manual serialization and deserialization.

## Usage

```js
// Import library
import DotStorage from "/path/to/DotStorage.ts";

// Create a new DotStorage instance for "value" using "key" and sessionStorage
const myValue = new DotStorage("value", "key", sessionStorage, // optional 4th parameter takes in additional options such as {
    namespace: "myNamespace:", // Set namespace
    expiresAt: 1, // Set expiration time
}); 

// Store the value in myValue
myValue.store();

// Set a new value for myValue
myValue.newValue = "newer value";

// Set new options for myValue
myValue.newOptions = {
    namespace: "myNamespace:", // Set namespace
    expiresAt: 1, // Set expiration time
};

// Retrieve the value from myValue
const retrievedValue = myValue.retrieve();

// Clear the stored value in myValue
myValue.clear();

```
