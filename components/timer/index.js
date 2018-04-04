import { connect } from "react-redux"; //나의 컴포넌트를 스토어에 연결하는 것을 도와줌
import Timer from "./presenter"; //Timer를 불러온다.
import { bindActionCreators } from "redux";
import { actionCreators as tomatoApps } from "../../reducer";

function mapStateToProps(state) {
  //state를 불러와서 prop으로 바꿔준다.
  const { elapsedTime, isPlaying, timeDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoApps.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoApps.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoApps.addSecond, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer); //Timer에 prop으로 바뀐 state를 연결해줌.
