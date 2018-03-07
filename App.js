import React from 'react'
import { BarChart, XAxis, YAxis, LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { View } from 'react-native'
import * as scale from 'd3-scale'

class App extends React.PureComponent {

    render() {

          const data = [
            {
                value: 50,
                label: 'J',
            },
            {
                value: 10,
                label: 'F',
            },
            {
                value: 40,
                label: 'M',
            },
            {
                value: 95,
                label: 'A',
            },
            {
                value: 85,
                label: 'M',
            },
            {
                value: 85,
                label: 'J',
            },
            {
                value: 85,
                label: 'J',
            },
            {
                value: 85,
                label: 'A',
            },
            {
                value: 8,
                label: 'S',
            },
            {
                value: 85,
                label: 'O',
            },
            {
                value: 15,
                label: 'N',
                svg: {
                   
                   
                    fill: 'red',
                   
                },
            },
            {
                value: 25,
                label: 'D',
                svg: {
                   
                   
                    fill: 'green',
                   
                },
            },
        ]
        const data2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const data3 = [0, 40];
        const bar = Object.keys(data).map(key => data[key].value)
          .map(valor => 
            {
              if(valor >= 50) return { value: valor, svg: { fill: 'rgb(48,211,109)'}}
              if(valor < 50) return { value: valor, svg: { fill: 'rgb(238,73,70)'}}
            });
           

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);
         const contentInset = { top: 20, bottom: 20 }
        return (
            <View style={{ height: 200, padding: 20, borderWidth: 1, borderColor: '#f90' }}>
            
             <BarChart
                    style={{ flex: 1 }}
                    data={bar}
                    gridMax={100}
                    gridMin={0}
                    spacing={1}
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)'}}
                    yAccessor={({ item }) => item.value}
                    spacingInner={0.3}
                    
            />
            
               
                <XAxis
                    style={{ marginTop: 10}}
                    data={ data }
                    scale={scale.scaleBand}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                    labelStyle={ { color: 'black' } }
                    xAccessor={({ index }) => index}
                />
                
            </View>
        )
    }

}

// <YAxis
//                  style={ { position: 'absolute', top: 0, bottom: 10 }}
//                     data={ data3}
//                     contentInset={ { top: 0, bottom: 0 } }
                  
//                   svg={{
//                       fill: 'grey',
//                       fontSize: 20,
//                   }}
//                   formatLabel={ value => `${value}K` }
//                 />

// export default App

// import React from 'react'
// import { LineChart } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
// import { Circle, G, Line, Rect, Text } from 'react-native-svg'

// class App extends React.PureComponent {

//     render() {

//         const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

//         /**
//          * Both below functions should preferably be their own React Components
//          */

//         const HorizontalLine = (({ y }) => (
//             <Line
//                 key={ 'zero-axis' }
//                 x1={ '0%' }
//                 x2={ '100%' }
//                 y1={ y(50) }
//                 y2={ y(50) }
//                 stroke={ 'grey' }
//                 strokeDasharray={ [ 4, 8 ] }
//                 strokeWidth={ 2 }
//             />
//         ))

//         const Tooltip = ({ x, y }) => (
//             <G
//                 x={ x(5) - (75 / 2) }
//                 key={ 'tooltip' }
//                 onPress={ (value) => console.log('tooltip clicked') }
//             >
                
//                 <G x={ 0 }>
                    
//                     <Circle
//                         cy={ y(data[ 0 ]) }
//                         r={ 6 }
//                         stroke={ 'rgb(134, 65, 244)' }
//                         strokeWidth={2}
//                         fill={ 'white' }
//                     />
//                 </G>
//             </G>
//         )

//         return (
//             <LineChart
//                 style={ { height: 200 } }
//                 data={ data }
//                 svg={{
//                     stroke: 'rgb(134, 65, 244)',
//                     strokeWidth: 2,
//                 }}
//                 contentInset={ { top: 20, bottom: 20 } }
//                 curve={ shape.curveLinear }
//                 extras={ [ HorizontalLine, Tooltip ] }
//             />
//         )
//     }

// }

export default App