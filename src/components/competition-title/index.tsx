import React from 'react';
import { CompetitionDetails, CompetitionName, EventName } from './styles';
import { CompetitionTitleProps } from './props';

const CompetitionTitle: React.FC<CompetitionTitleProps> = (props: CompetitionTitleProps) => {
  return (
    <CompetitionDetails>
      <CompetitionName>{props.competitionName}</CompetitionName>
      <EventName>{props.eventName}</EventName>
    </CompetitionDetails>
  );
};

export default CompetitionTitle;
