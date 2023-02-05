import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,AreaChart,Area} from 'recharts';


//   ]
  

 

const chart = ({color,temp,total_mark,Mark_obtained,data}) => {




  return (
    <div>
    <AreaChart width={480} height={200} data={data}
     margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
 >
  <defs>
    {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient> */}
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
      <stop offset="95%" stopColor={color} stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="Month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  {/* <Area type="monotone" dataKey="chemsitry" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
  <Area type="monotone" dataKey={Mark_obtained} stroke={color} fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey={total_mark} stroke={"#ababab"} fillOpacity={0} fill="url(#colorPv)" />
  
  
</AreaChart>


    </div>
  )
}

export default chart
