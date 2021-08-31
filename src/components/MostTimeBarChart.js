import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';


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
          <LabelList dataKey="hours" position="top" fill="#82ca9d"/>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
