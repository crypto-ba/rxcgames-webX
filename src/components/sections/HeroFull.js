import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';
import BankrollBalance from '../BankrollBalance/BankrollBalance';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                RXC Games
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                  • <a className="no-underline" href={require("./../../assets/RXCGWhitepaper.pdf")} download="Whitepaper">RXCG Whitepaper</a> •
                </p>
                <div className="cta">
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://moons.rxcgames.com/">
                    Moons
                  </Button>                                                      
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://app.rxcgames.com/">
                    Games
                  </Button>
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://stake.rxcgames.com/">
                    Stake
                  </Button> 
                </div>
              </div>
              <div className="container-sm pt-24 reveal-from-bottom">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://t.me/rxcgames">
                      <Image
                        src={require('./../../assets/images/links/telegram.svg')}
                        alt="RXCG Telegram"
                        width={48}
                        height={48} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://twitter.com/rxc_games">
                      <Image
                        src={require('./../../assets/images/links/twitter.svg')}
                        alt="RXCG Twitter"
                        width={48}
                        height={48} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x7c59a57fc16eac270421b74615c4bc009ecd486d">
                      <Image
                        src={require('./../../assets/images/links/pcs.svg')}
                        alt="RXCG PCS"
                        width={48}
                        height={48} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://poocoin.app/tokens/0x7c59a57fc16eac270421b74615c4bc009ecd486d">
                      <Image
                        src={require('./../../assets/images/links/poocoin.svg')}
                        alt="RXCG Poocoin"
                        width={48}
                        height={48} />
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <p className="m-0 text-sm">
              <BankrollBalance />              
            </p>  
              <Image
                src={require('./../../assets/images/hero-image.png')}
                alt="RXCG Casino"
                width={600}
                height={604} /> 
            </div>
                <div className="cta">
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://www.binance.com/en/support/faq/how-to-use-binance-defi-wallet-and-bridge-funds-cross-chains-ffd4cac0efbd4636b1c4e661a4a82de5/">
                    Binance DeFi
                  </Button>
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://metamask.io/">
                    Metamask
                  </Button>                                                      
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://trustwallet.com/">
                    Trustwallet
                  </Button>                                                        
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://brave.com/wallet/">
                    Brave
                  </Button>
                </div> 
          </div>
        </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
