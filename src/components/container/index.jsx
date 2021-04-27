import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import P1 from '../person1';
import P2 from '../person2';
import P3 from '../person3';

export default function Container() {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));
  const bind = useDrag(
    ({ movement: [x], velocity, down, direction: [dx], tap }) => {
      if (!down) {
        if (x > -100) {
          set({ x: 0 });
        } else if (x < -300) {
          set({ x: -400 });
        } else {
          set({ x: -200 });
        }
        return;
      }
      set({ x });
    },
    {
      initial: () => [x.get(), 0],
      bounds: { left: -400, right: 0, top: 0, bottom: 476 },
      rubberband: true,
    },
  );
  return (
    <div className="container" {...bind()}>
      <div className="title">
        <div className="title1">
          <animated.ul
            className="titleList"
            style={{
              y: x.to({
                range: [-400, -200, 0],
                output: [-60, -30, 0],
              }),
            }}
          >
            <li className="titleItem">Outstanding</li>
            <li className="titleItem">Extraordinary</li>
            <li className="titleItem">Superb</li>
          </animated.ul>
        </div>
        <div className="title2">REAL ESTATE</div>
        <div className="title3">AGENTS</div>
      </div>
      <svg className="blob" width="256" height="464" viewBox="0 0 256 464">
        <animated.path
          d={x.to({
            range: [-400, -200, 0],
            output: [
              'M 157.81292,131.16918 C 128.33979,127.45582 59.004493,121.76045 53.287478,168.06051 47.570462,214.36057 86.454799,213.14326 77.881699,234.66986 69.308599,256.19646 59.042495,268.13837 67.634107,288.98209 76.225718,309.82581 103.27857,320.05328 138.34249,312.55156 173.40641,305.04984 204.93111,298.87002 208.02612,279.75926 211.12113,260.6485 189.48716,257.88808 188.5557,229.54606 187.62424,201.20404 212.01456,174.45091 200.8528,155.7634 189.69104,137.07589 187.28605,134.88254 157.81292,131.16918 Z',
              'M 157.81292,131.16918 C 128.33979,127.45582 48.756902,138.1566 53.287478,168.06051 57.818054,197.96442 75.182448,197.77187 73.782662,224.42227 72.382877,251.07266 70.314846,257.89078 72.757903,278.7345 75.20096,299.57822 88.114636,303.32873 113.94876,307.60312 139.78288,311.87751 159.84171,314.24141 176.25858,295.13065 192.67546,276.01989 203.83379,256.86332 190.60522,228.5213 177.37665,200.17928 205.866,189.8223 211.10039,171.13479 216.33478,152.44728 187.28605,134.88254 157.81292,131.16918 Z',
              'M 157.81292,131.16918 C 128.33979,127.45582 86.672992,124.83473 71.733144,166.01099 56.793295,207.18725 69.033893,203.92043 80.955976,230.57083 92.87806,257.22123 55.968217,259.9403 59.436033,279.75926 62.90385,299.57822 94.985717,299.83924 132.0922,306.16316 169.19868,312.48708 186.48544,320.38997 198.80328,288.98209 211.12113,257.57422 199.73475,245.59097 195.72902,217.24895 191.72328,188.90693 209.96504,178.54995 215.19943,159.86244 220.43382,141.17493 187.28605,134.88254 157.81292,131.16918 Z',
            ],
          })}
          style={{
            fill: x.to({
              range: [-400, -200, 0],
              output: ['#fdeae7', '#d3eacf', '#eae7fd'],
            }),
          }}
        />
      </svg>
      <animated.div
        className="person person1"
        style={{ transform: x.to((x) => `rotate(${x / 10}deg)`) }}
      >
        <P1 />
      </animated.div>
      <animated.div
        className="person person2"
        style={{ transform: x.to((x) => `rotate(${x / 10 + 20}deg)`) }}
      >
        <P2 />
      </animated.div>
      <animated.div
        className="person person3"
        style={{ transform: x.to((x) => `rotate(${x / 10 + 40}deg)`) }}
      >
        <P3 />
      </animated.div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        facere
      </div>
      <div className="navDots">
        <animated.div
          className="navDot"
          style={{
            backgroundColor: x.to({
              range: [-400, -200, 0],
              output: ['#000', '#000', '#e0c5c0'],
            }),
            transform: x.to({
              range: [-400, -200, 0],
              output: ['scale(1)', 'scale(1)', 'scale(1.2)'],
            }),
          }}
        ></animated.div>
        <animated.div
          className="navDot"
          style={{
            backgroundColor: x.to({
              range: [-400, -200, 0],
              output: ['#000', '#e0c5c0', '#000'],
            }),
            transform: x.to({
              range: [-400, -200, 0],
              output: ['scale(1)', 'scale(1.2)', 'scale(1)'],
            }),
          }}
        ></animated.div>
        <animated.div
          className="navDot"
          style={{
            backgroundColor: x.to({
              range: [-400, -200, 0],
              output: ['#e0c5c0', '#000', '#000'],
            }),
            transform: x.to({
              range: [-400, -200, 0],
              output: ['scale(1.2)', 'scale(1)', 'scale(1)'],
            }),
          }}
        ></animated.div>
      </div>
    </div>
  );
}
