import { imgPreview } from './default.config';
export const htmlContent = (image:string) :string => {
  image = image.replace('background', '').replace(/[\\/]/g, '');
  const _imgPreview = imgPreview.replace('background', '').replace(/[\\/]/g, '');
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XO-background</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
      <div class="xo-preview">
        <img class="xo-preview__img" src="${ image ? image : _imgPreview }" />
        <div class='_blink'></div>
      </div>
    </body>
  </html>
  `;
};

export const cssContent:string = `
.xo-preview {
  width: 350px;
  position: relative;
  overflow: hidden;
}

.xo-preview__img {
  width: 100%;
  z-index: -11;
  position: relative;
}
`; 