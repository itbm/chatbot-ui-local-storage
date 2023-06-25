# Chatbot UI Local Storage

This extension provides local storage support to my custom version of [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui).

## Installation

Installing this extension by hand is usually not required, as it ships with the base version of [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui). However, if you replaced this extension with a database extension, then you can re-install with the following steps:

### Step 1

Install the local storage extension with npm:

```sh
npm i @chatbot-ui/local-storage@latest
```

### Step 2

Update `/utils/app/storage.ts` to use the local storage:

```typescript
import { Database } from '@chatbot-ui/core';
import { LocalDatabase } from 'chatbot-ui-local-storage';

// <-----Update here

let database: Database | null = null;

export const getDatabase = async () => {
  if (database) {
    return database;
  } else {
    database = new LocalDatabase(); // <-----Update here
    await database.connect();
    return database;
  }
};
```

That's it.
