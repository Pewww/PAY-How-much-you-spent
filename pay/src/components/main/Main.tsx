import * as React from 'react';
import {
  ICON_PLUS,
  ICON_PERCENT,
  ICON_DOLLAR,
  ICON_RESET,
  ICON_SIDEBAR
} from '../../constants/imgsAndIcons';
import {convertToSpecificFormat} from 'src/lib/convertNumber';
import InfoList from '../common/InfoList/InfoList';
import './main.scss';

class Main extends React.Component {
  currentInfoLists = () => {
    // Logic
    return [
      {
        title: '현재 수치',
        subTitle: '현재 수치를 나타냅니다.',
        imgSrc: ICON_PERCENT,
        mainValue: '95',
        suffix: '퍼센트'
      },
      {
        title: '남은 돈',
        subTitle: '현재 남은 돈을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: convertToSpecificFormat('345672'),
        suffix: '원'
      },
      {
        title: '초기화',
        subTitle: '현재 남은 시간을 나타냅니다.',
        imgSrc: ICON_RESET,
        mainValue: '14',
        suffix: '일'
      },
      {
        title: '하루 지출액',
        subTitle: '오늘 하루 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: convertToSpecificFormat('56000'),
        suffix: '원'
      },
      {
        title: '이번 달 지출액',
        subTitle: '이번 한 달의 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: convertToSpecificFormat('146000'),
        suffix: '원'
      },
      {
        title: '저번 달 지출액',
        subTitle: '저번 한 달의 지출액을 나타냅니다.',
        imgSrc: ICON_DOLLAR,
        mainValue: convertToSpecificFormat('672800'),
        suffix: '원'
      }
    ]
  }

  render() {
    return (
      <div className="main">
        <header>
          <img
            src={ICON_SIDEBAR}
            alt="사이드바"
            className="icon-sidebar"
          />
          <span className="total">Total</span>
          <h1>₩ {convertToSpecificFormat('345672')}</h1>
          <img
            src={ICON_PLUS}
            alt="수입/지출 추가"
            className="icon-plus"
          />
        </header>
        <ul className="current-infos">
          {this.currentInfoLists().map(({
            title,
            subTitle,
            imgSrc,
            mainValue,
            suffix
          }) => (
            <InfoList
              title={title}
              subTitle={subTitle}
              imgSrc={imgSrc}
              mainValue={mainValue}
              suffix={suffix}
              key={title}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;