import React, { FC } from 'react';
import styles from './SegmentsUsersInfoSwitchView.module.scss';
import SegmentsUsersAttributes from '../SegmentsUsersAttributes/SegmentsUsersAttributes';
import SegmentsUsersEvents from '../SegmentsUsersEvents/SegmentsUsersEvents';
import SegmentsUsersStatistic from '../SegmentsUsersStatistic/SegmentsUsersStatistic';

export type typeSwitch = 'statistic' | 'attributes' | 'events';

interface SegmentsUsersInfoSwitchViewProps {
  type: typeSwitch
}

const SegmentsUsersInfoSwitchView: FC<SegmentsUsersInfoSwitchViewProps> = ({
  type
}) => {
  if (type === 'statistic') {
    return (
      <SegmentsUsersStatistic></SegmentsUsersStatistic>
    )
  }

  if (type === 'attributes') {
    return (
      <SegmentsUsersAttributes></SegmentsUsersAttributes>
    )
  }

  if (type === 'events') {
    return (
      <SegmentsUsersEvents></SegmentsUsersEvents>
    )
  }

  return <></>;
}

export default SegmentsUsersInfoSwitchView;
