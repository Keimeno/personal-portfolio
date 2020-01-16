# Personal Portfolio

## Description

This is my personal portfolio website. If you're interested in using it for yourself, go by the following steps.

## Setup

-   npm i
-   npm start (for development purposes)
-   npm i -g firebase
-   firebase init
-   npm run build
-   npm run deploy

## Configuration

To configure this website to your own, you need to change the following files:

```bash
src/
    store/
        storage/
			projects/
			open-source/
				index.ts
				list.ts
				items/
					index.ts
					...
	assets/
		projects/
		open-source/
			screenshots/
				.../
					...
			...

```

As it is easily possible to test out what you need to change to expect what behavior I will not provide any further documentation about this. Especially because this is not supposed to be widely used.
