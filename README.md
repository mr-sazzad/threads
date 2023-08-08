## 👋 Hi There

```css
LANGUAGES

javascript
typescript
-----------------------------
FREAMWARK

😊 nextjs
-----------------------------
CSS FREAMWARK

tailwind css
chad cn
tailwindcss animation
-----------------------------
OTHERS

@clerk/next
react-hook-form
zod

```
-----------------------------


```ts
// app/utils/uploadthing.ts

import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "~/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } =
generateReactHelpers<OurFileRouter>();

```

```ts
// app/api/uploadthing/core.ts

import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" });  // Fake auth function
 

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      if (!user) throw new Error("Unauthorized");
 
      return { userId: user.id };
    })

    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;

```

1. @clerk/next
   
```bash
npm i @clerk/next
go to https://clerk.com/docs/nextjs/get-started-with-nextjs
```

