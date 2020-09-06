class BubbleChart extends BaseChart {

    prepareData(aData, oConfig) {
        this.layout = Object.assign({}, this.layout, {
            yaxis: {
                automargin: true,
                showgrid: true
            },
            xaxis: {
                automargin: true,
                showgrid: true
            },
        });
        const oData = super.prepareData(aData, oConfig);
        const commonParams = {
            mode: 'markers'
        };
        return [
            ...oData.meas.map((item, i) => {
                return Object.assign({}, {
                    x: item,
                    y: oData.dim,
                    marker: {
                        color: item.map((value, i) => this.colors(i)),
                        opacity: item.map(() => 0.7),
                        size: item.map(value => +value * 1.5)
                    }
                }, commonParams)
            })
            // {
            //     y: [
            //         ...aData.reduce((dim, item) => {
            //             const keys = Object.keys(item);
            //             if(dim.length === 0) {
            //                 dim = Array.from(Array(keys.length - 1), () => []);
            //             };
            //             keys.forEach((key, i) => {
            //                 if(key !== "value") {
            //                     dim[i].push(item[key]);
            //                 }
            //             });
            //             return dim;
            //         }, [])
            //     ],
            //     x: aData.map(item => item.value),
            //     mode: 'markers',
            //     marker: {
            //     //   color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            //       opacity: aData.map(() => .6),
            //       size: aData.map(item => +item.value * 1.5)
            //     }
            // }
        ];
    }

}