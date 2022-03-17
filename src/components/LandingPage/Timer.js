import moment from 'moment';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import useWindowDimensions from '../../Utilities/useWindowDimesion';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension, time) => {
  return (
    <>
      <div className='time-wrapper'>
        <div className='time'>{time}</div>
        <TimerCaptionText>{dimension}</TimerCaptionText>
      </div>
    </>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => {
  // console.log(moment(11554.470695987635).minutes(), daySeconds);
  return ((time % daySeconds) / hourSeconds) | 0;
};

const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  const { width } = useWindowDimensions();
  // console.log(width);

  const timerProps = {
    isPlaying: true,
    size: width / 13,
    strokeWidth: width / 190,
    strokeLinecap: 'round',
    trailStrokeWidth: width / 320,
    trailColor: '#ffffff',
  };

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = moment('2022-03-01').unix(); // use UNIX timestamp in seconds
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  // console.log(remainingTime);
  // console.log(remainingTime % daySeconds);

  return (
    <TimerStyled>
      <CountdownCircleTimer
        {...timerProps}
        colors='#64FFC7'
        duration={daysDuration}
        initialRemainingTime={remainingTime}>
        {({ elapsedTime }) =>
          renderTime('days', getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        className='hours'
        {...timerProps}
        colors='#64FFC7'
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}>
        {({ elapsedTime }) =>
          renderTime('hours', getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>

      <CountdownCircleTimer
        className='minutes'
        {...timerProps}
        colors='#64FFC7'
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}>
        {({ elapsedTime }) =>
          renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        className='seconds'
        {...timerProps}
        colors='#64FFC7'
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0,
        ]}>
        {({ elapsedTime }) =>
          renderTime('seconds', getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </TimerStyled>
  );
}

const TimerStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-align: center;
  & > div {
    margin: 0 15px;
  }
  .time {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.875rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 50%;
    & > div {
      margin: 0 5px;
    }
    .time {
      font-size: 1rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60%;
    margin-top: 25px;
    & > div {
      margin: 0 10px;
    }
    .time {
      font-size: 1.5rem;
    }
  }
`;
const TimerCaptionText = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-transform: capitalize;
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
    bottom: -25px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
    bottom: -30px;
  }
`;
