import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

export default function Combining() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px',marginTop: '-650px'  }}>
      <ChartContainer
        series={series}
        width={800}
        height={500}
        xAxis={[
          {
            id: 'years',
            data: [2018, 2019, 2020, 2021, 2022],
            scaleType: 'band',
            valueFormatter: (value) => value.toString(),
          },
        ]}
        yAxis={[
          {
            id: 'eco',
            scaleType: 'linear',
          },
          {
            id: 'pib',
            scaleType: 'log',
          },
        ]}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis label="Years" position="bottom" axisId="years" />
        <ChartsYAxis label="yearly Visits" position="left" axisId="eco" />
        <ChartsYAxis label="Average Total Cost of Care" position="right" axisId="pib" />
      </ChartContainer>
    </div>
  );
}
