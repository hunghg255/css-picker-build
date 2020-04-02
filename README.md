# Introduction
Project's generator CSS with Next, MobX and typescript

# How to start this?
Run ```npm run dev```
# How to add server koa

1. Run `npm i ts-node`: run server with `ts-node` instead of `node`
2. Create `tsconfig.server.json` and paste content to file 
  ```
  {
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }
  ```
3. In `script` file: change `dev` to: `ts-node --project tsconfig.server.json server/index.ts`
4. Happy hacking with code 

---
Have fun : )
