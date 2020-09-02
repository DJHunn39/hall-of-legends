This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project is for a simple webapp used for displaying information and statistics about FIFA Ultimate Team players for me and my flatmate's clubs from almost a decade of play.

Just fyi if you're looking at this from a professional perspective - I absolutely do not recommend looking at this from a professional perspective! It's totally hacky, makes very few considerations for performance, and a lot of duplicate code is everywhere. And there are no tests. Or linting rules. Or any consistency in general.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

If you do not have access to the MongoDB instance used as the back-end of this application, you will not have the URL required to make calls to this back-end, and therefore you will not see any data rendered on the front-end.

For security reasons, the MongoDB URL is not contained within this repository.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
