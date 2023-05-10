import { Box, Heading } from "@chakra-ui/react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';
import { tagMap } from '../utils/tagColors';

interface Props {
  minion: any;
  verminion: any;
}

const StatChart = (props: Props) => {

  const { minion, verminion } = props;

  const max = 60;

  const data = [
    {
      'stat': 'attack',
      'value': verminion?.attack,
      'fullMark': max
    },
    {
      'stat': 'defense',
      'value': verminion?.defense,
      'fullMark': max
    },
    {
      'stat': 'cost',
      'value': verminion?.cost,
      'fullMark': max
    }
  ];

  const text = 'dark.text';

  return (
    <ResponsiveContainer width={'100%'} height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis angle={80} domain={[0, max]} />
        <Radar name={minion?.name} dataKey={'value'} stroke={tagMap[minion?.race?.id]} fill={tagMap[minion?.race?.id]} fillOpacity={0.6} />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default StatChart;
