1. boilerplate :

```
https://github.com/paulintrognon/next-typescript.git
```

2. Add Tailwind

```
see official documentation: https://tailwindcss.com/docs/guides/nextjs

```

3. Add Mantine

```
https://mantine.dev/guides/next/
```

---

Part 4(Don't know which part) :

- Add Auth functionality using React Query Mutations and get user using React Query Queries
- install react-query and axios
- add axios default
- add env.local file and add env variables
  API_BASE_ENDPOINT = http://localhost:4000
  NEXT_PUBLIC_API_BASE_ENDPOINT = http://localhost:4000
- wrap app with QueryClientProvider
- create mutation for login and signup with typescript
- FIRE handleAuth() and whoo... fix the cors error
- create query for get user
- handle error using react-hot-toast

Part 5 :

- Create a LayoutWrapper to make the "/me" request on refresh and redirect to login if not authenticated
- add protected route for "/me" page
- add condition to render auth page only if not authenticated
