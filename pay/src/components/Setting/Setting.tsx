import * as React from 'react';
import IBase from '../../@types/models/base';
import MainTitle from '../common/MainTitle/MainTitle';
import Input from '../common/Input/Input';
import {
  convertToSpecificFormat,
  convertToNormalFormat
} from '../../lib/convertNumber';
import LinkBtn from '../common/LinkBtn/LinkBtn';
import InputRange from '../common/InputRange/InputRange';
import './setting.scss';

interface IState extends IBase {
  [key: string]: any;
}

class Setting extends React.Component<{registerBaseInfo: any}, IState> {
  state: IState = {
    currentMoney: '',
    hasFixedIncome: false,
    fixedIncome: '',
    incomeCycle: ''
  }

  onChange = (
    {target: {name, value}}: React.ChangeEvent<HTMLInputElement>,
    type: string = 'money'
  ) => {
    if (type === 'money') {
      this.setState({
        [name]: value && convertToSpecificFormat(convertToNormalFormat(value))
      });
    } else {
      (Number(value) <= 31 || value === '') && this.setState({
        [name]: value
      });
    }
  }
  
  onClick = () => {
    this.setState({
      hasFixedIncome: !this.state.hasFixedIncome
    });
  }

  render() {
    const {
      currentMoney,
      hasFixedIncome,
      fixedIncome,
      incomeCycle
    } = this.state;
    const {registerBaseInfo} = this.props;

    return (
      <div className="setting">
        <MainTitle />
        <Input
          name="currentMoney"
          value={currentMoney}
          placeholder="소지한 돈을 입력하세요."
          onChange={this.onChange}
          className="current-money"
          suffix="원"
        />
        <Input
          name="hasFixedIncome"
          value="고정 수입이 있나요?"
          disabled={true}
          className="has-fixed-income"
          arrow={true}
          opened={hasFixedIncome}
          onClick={this.onClick}
        />
        {hasFixedIncome && (
          <>
            <Input
              name="fixedIncome"
              value={fixedIncome}
              placeholder="한달 고정 수입을 입력하세요."
              onChange={this.onChange}
              suffix="원"
            />
            <Input
              name="incomeCycle"
              value={incomeCycle}
              placeholder="수입 초기화 날짜를 입력하세요."
              onChange={e => this.onChange(e, 'date')}
              suffix="일"
            />
            <InputRange
              min={1}
              max={31}
              step={1}
              value={incomeCycle || 1}
              onChange={({target: {value}}) => this.setState({incomeCycle: value})}
            />
          </>
        )}
        <LinkBtn
          to="/main"
          text="설정하기"
          onClick={() => registerBaseInfo(this.state)} // this.props.registerBaseInfo와 같음
        />
      </div>
    );
  }
}

export default Setting;