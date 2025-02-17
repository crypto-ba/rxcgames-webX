import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Roadmap extends React.Component {

  state = {
    priceChangerValue: "1",
    priceOutput: {
      plan1: {
        0: ["Q4"],
      },
      plan2: {
        0: ["Q1"],
      },
      plan3: {
        0: ["Q2"],
      },
      plan4: {
        0: ["Q3"],
      }
    }
  }

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
      this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handleRoadmapSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlRoadmapSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  }

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Roadmap',
      paragraph: 'What we achieved so far, what our plan for the future is and when to expect those goals to come to life.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div style={{maxWidth: "1500px !important"}}>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <div className="roadmap-item-content">
                    <div className="roadmap-item-header pb-24 mb-24">
                      <div className="roadmap-item-price mb-4">
                        <span className="roadmap-item-price-currency h2">
                          Q4 2021
                        </span>
                      </div>
                    </div>
                    <div className="roadmap-item-features mb-40">
                      <ul className="roadmap-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Private presale</li>
                        <li className="is-checked">Whitelist presale</li>
                        <li className="is-checked">Audit</li>
                        <li className="is-checked">Marketing</li>
                        <li className="is-checked">CG & CMC listing</li>
                        <li className="is-checked">RXCGames Casino Alpha</li>
                        <li className="is-checked">Communities on more languages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="roadmap-item-content">
                    <div className="roadmap-item-header pb-24 mb-24">
                      <div className="roadmap-item-price mb-4">
                        <span className="roadmap-item-price-currency h2">
                          Q1 - Q4 2022
                        </span>
                      </div>
                    </div>
                    <div className="roadmap-item-features mb-40">
                      <ul className="roadmap-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Discord community</li>
                        <li className="is-checked">Staking Smart Contract</li>
                        <li className="is-checked">2Way Swap Coin to Token.</li>
                        <li className="is-checked">NowPayments listing.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="roadmap-item-content">
                    <div className="roadmap-item-header pb-24 mb-24">
                      <div className="roadmap-item-price mb-4">
                        <span className="roadmap-item-price-currency h2">
                          Q4 2022 
                        </span>
                      </div>
                    </div>
                    <div className="roadmap-item-features mb-40">
                      <ul className="roadmap-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Crypto bear market</li>
                        <li className="is-checked">RXC Games team Reborn</li>
                        <li className="is-checked">Complete rehaul of old codbase</li>
                        <li className="is-checked">RXC Games Reborn from ash.</li>
                        <li className="is-checked">Payment gateway developement.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="roadmap-item-content">
                    <div className="roadmap-item-header pb-24 mb-24">
                      <div className="roadmap-item-price mb-4">
                        <span className="roadmap-item-price-currency h2">
                          2023
                        </span>
                      </div>
                    </div>
                    <div className="roadmap-item-features mb-40">
                      <ul className="roadmap-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Inhouse games developement.</li>
                        <li>RXCGames Casino Beta</li>
                        <li>MOONS Web browser game developing</li>
                        <li>Lottery/Raffle system for RXCG token</li>
                        <li>Developement of PVP Battle slot system</li>
                        <li>Inhouse Poker system</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="roadmap-item-content">
                    <div className="roadmap-item-header pb-24 mb-24">
                      <div className="roadmap-item-price mb-4">
                        <span className="roadmap-item-price-currency h2">
                          2024
                        </span>
                      </div>
                    </div>
                    <div className="roadmap-item-features mb-40">
                      <ul className="roadmap-item-features-list list-reset text-xs mb-32">
                        <li>Set up for DAO community</li>
                        <li>Social Media Marketing</li>
                        <li>Community Forum set up</li>
                        <li>DAO community</li>                        
                        <li>Managed by DAO</li>
                        <li>Additional marketings (if voted by DAO)</li>
                        <li>Additional major casino updates (if managed by DAO)</li>
                        <li>More CEX listings (if voted by DAO)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
