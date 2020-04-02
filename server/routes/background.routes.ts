import Router from "koa-router";
const multer = require('@koa/multer');
const path = require('path');
const fs = require('fs');
const router = new Router();

const AdmZip = require('adm-zip');
const appRoot = require('app-root-path');

const fileFilter = (_req: any, file: any, cb: any) => {
  const allowedMimes = ['image/jpeg', 'image/jpg', 'image/pjpeg', 'image/png', 'image/gif', 'application/json'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only jpg, png and gif image files are allowed.'));
  }
};

const storage = multer.diskStorage({
  destination(_req:any, _file:any, cb: Function) {
    cb(null, './public/background/');
  },
  filename(_req:any, file:any, cb: Function) {
    cb(null, `${Date.now().toString() + path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter,
});
type TUpload = { file: any, body: string };
router.post("/upload-file", upload.single('img'), async (ctx: TUpload): Promise<void> => {
  const img: { path: string } = ctx.file;
  await fs.createReadStream(img.path);
  ctx.body = img.path.replace('public', '');
});

router.post('/create-template-file', async (ctx): Promise<void> => {
  const {
    html,
    css,
  } = ctx.request.body;

  let {
    imagePreview,
    texture,
  } = ctx.request.body;
  console.log(process.platform)
  if (imagePreview === '') {
    if (process.platform === "win32") {
      imagePreview = 'background\\example.jpg';
    } else {
      imagePreview = 'background/example.jpg';
    }
  }

  if (texture === '') {
    if (process.platform === "win32") {
      texture = 'images\\noise.png';
    } else {
      texture = 'images/noise.png';
    }
  }

  const zip = new AdmZip();
  zip.addFile("index.html", Buffer.alloc(html.length, html), "HTML <create by XO-team>");
  zip.addFile("style.css", Buffer.alloc(css.length, css), "CSS <create by XO-team>");
  let localPath:string;
  if (process.platform === "win32") {
    localPath = `${appRoot}\\public\\`;
  } else {
    localPath = `${appRoot}/public/`;
  }
  zip.addLocalFile(`${localPath}${imagePreview}`);
  zip.addLocalFile(`${localPath}${texture}`);
  await zip.writeZip(`${localPath}XO-background.zip`, function() {
    // ctx.redirect('/XO-background.zip'); /** Not working ! */
    ctx.body = `XO-background.zip`;
  });
})

export default router;
