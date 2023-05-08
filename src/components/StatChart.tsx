import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  PolarRadiusAxis
} from 'recharts';
import { tagMap } from '../utils/tagColors';

interface Props {
  minion: any;
  verminion: any;
}

const StatChart = (props: Props) => {

  const { minion, verminion } = props;

  const max = 60;

  const [data, setData] = useState([
    {
      'stat': 'attack',
      'value': verminion.attack,
      'fullMark': max
    },
    {
      'stat': 'defense',
      'value': verminion.defense,
      'fullMark': max
    },
    {
      'stat': 'cost',
      'value': verminion.cost,
      'fullMark': max
    }
  ]);

  const text = 'dark.text';

  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'start'}
      padding={5}
    >
      <Heading fontSize={'xl'} color={text} width={'89%'}>Verminion Stats</Heading>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <PolarRadiusAxis angle={80} domain={[0, max]} />
          <Radar name={minion?.name} dataKey={'value'} stroke={tagMap[minion.race.id]} fill={tagMap[minion.race.id]} fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default StatChart;
