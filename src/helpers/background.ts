import bgStore from '../stores/background';

const blinkAfterGlobal = `
    content: "";
    display: block;
    height: 300%;
    left: -100%;
    position: absolute;
    top: -100%;
    width: 300%;
    z-index: -10;
`;

export const renderHTML = (texture: string, opacity: number, animation: boolean):string => {
  if (getOS() === 'Windows') {
    texture = texture.slice(texture.lastIndexOf('/') + 1);
  } else {
    texture = texture.slice(texture.lastIndexOf('\\') + 1);
  }
  const ani:string = `${animation ? 'grain' : 'none'} 8s steps(10) infinite`;

  return `
  ._blink:after {
    -webkit-animation: ${ani};
    animation: ${ani};
    background: url(${texture ? texture : 'noise.png'});
    opacity: ${opacity / 100};
    ${blinkAfterGlobal}
  }
  `;
}

export const bgHtml = ():string => { /** For preview */
  const { opacity, animation } = bgStore;
  let { texture } = bgStore;
  texture = texture.replace(/\\/g, '/'); /** Fix for window user, You need to change here if texture's error */
  const ani:string = `${animation ? 'grain' : 'none'} 8s steps(10) infinite`;

  return `
  ._blink:after {
    -webkit-animation: ${ani};
    animation: ${ani};
    background: url(${texture ? texture : 'images/noise.png'});
    opacity: ${opacity / 100};
    ${blinkAfterGlobal}
  }
  `;
}

export const globalCssBackground = ():string => {
  return `
  ._blink {
    display: block;
    overflow: hidden;
    }
  ._blink > * {
      z-index: 1
  }

  @keyframes grain {
    0%,
    100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    10% {
        -webkit-transform: translate(-5%, -10%);
        transform: translate(-5%, -10%)
    }
    20% {
        -webkit-transform: translate(-15%, 5%);
        transform: translate(-15%, 5%)
    }
    30% {
        -webkit-transform: translate(7%, -25%);
        transform: translate(7%, -25%)
    }
    40% {
        -webkit-transform: translate(-5%, 25%);
        transform: translate(-5%, 25%)
    }
    50% {
        -webkit-transform: translate(-15%, 10%);
        transform: translate(-15%, 10%)
    }
    60% {
        -webkit-transform: translate(15%, 0%);
        transform: translate(15%, 0%)
    }
    70% {
        -webkit-transform: translate(0%, 15%);
        transform: translate(0%, 15%)
    }
    80% {
        -webkit-transform: translate(3%, 35%);
        transform: translate(3%, 35%)
    }
    90% {
        -webkit-transform: translate(-10%, 10%);
        transform: translate(-10%, 10%)
    }
  }
`;
}

export function getOS():string {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os as string;
}
