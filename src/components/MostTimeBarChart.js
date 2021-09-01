import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const COLORS = ['#53a2c3', '#5568a2', '#273b71', '#c3b5d2'   ];
const COLORS = ['#ffeaf9', '#ae9dc1', '#817ba7', '#4c5c8d'   ];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="80%" height="60%">
        <BarChart
          width={400}
          height={200}
          data={this.props.data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="activity" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#82ca9d" >
          <LabelList dataKey="hours" position="top" fill="#fff"/>
          {this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
