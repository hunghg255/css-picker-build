import * as React from 'react';
import Link from 'next/link';
// import './card.css';
/**
 * ZIP to image: https://imagecompressor.com/vi/
 */
interface PCard {
  listCard: {
    img: string;
    imgFull: string;
    href: string;
    text: string;
    description: string;
  }[],
}

class Card extends React.Component<PCard> {
  public static defaultProps:PCard = {
    listCard: [
      {
        img: '/images/box-shadow-min.png',
        imgFull: '/images/box-shadow.png',
        href: '/shadow',
        text: 'Box shadow',
        description: 'Click to build box-shadow',
      },
      {
        img: '/images/transform-min.jpg',
        imgFull: '/images/transform.jpg',
        href: '/transform',
        text: 'Transform animation',
        description: 'Click to build transform animation'
      },
    ]
  };

  componentDidMount() {
    const card_images:NodeListOf<HTMLElement> = document.querySelectorAll('.card-image');
    card_images.forEach(function(card_image: HTMLElement) {
      const image_url = card_image.getAttribute('data-image-full');
      const content_image = card_image.querySelector('img') as HTMLImageElement;
      content_image.src = image_url as string;
      content_image.addEventListener('load', function() {
        card_image.style.backgroundImage = 'url(' + image_url + ')';
        card_image.className = card_image.className + ' is-loaded';
      });
    });

  }
  render() {
    const { listCard } = this.props;
    return <>
    <ul className="card-list">
      {
        listCard.map((item, index) =>
        <li className="card" key={index}>
          <Link href={item.href} >
            <a
              className="card-image"
              style={{backgroundImage: `url(${item.img})`}}
              data-image-full={item.imgFull}
            >
              <img src={item.img} alt="Psychopomp" />
            </a>
          </Link>
          <div
            className="card-description"
          >
            <h2>{item.text}</h2>
            <p>{item.description}</p>
          </div>
      </li>)
      }
    </ul>
    </>
  }
}

export default Card;
