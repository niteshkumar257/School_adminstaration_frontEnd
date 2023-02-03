import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,AreaChart,Area} from 'recharts';

// const data = [
//     {
//       "Month": "Jan",
//       "Physics": 10,
//       "chemsitry":20,
//       "math":78
    
//     //   "amt": 2400
//     },
//     {
//       "Month": "Feb",
//       "Physics": 20,
//       "chemsitry":90,
//       "math":34
     
//     //   "amt": 2210
//     },
//     {
//       "Month": "March",
//       "Physics": 50,
//        "chemsitry":67,
//        "math":39
//     //   "amt": 2290
//     },
//     {
//       "Month": "April",
//       "Physics": 40,
//       "chemsitry":67,
//       "math":45
//     },
//     {
//       "Month": "May",
//       "Physics": 20,
//       "chemsitry":67,
//       "math":89
   
//     //   "amt": 2181
//     },
//     {
//       "Month": "June",
//       "Physics": 10,
//       "chemsitry":90,
//       "math":34
    
//     },
//     {
//       "Month": "July",
//       "Physics": 50, 
//       "chemsitry":12,
//       "math":34
//     //   "amt": 2100
//     }
//   ]
  
const chart = ({color,temp,dataKey,data}) => {
 
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
  <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey={temp} stroke={"black"} fillOpacity={0} fill="url(#colorPv)" />
</AreaChart>
    </div>
  )
}

export default chart
