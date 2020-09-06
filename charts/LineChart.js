sap.ui.define([
    "BaseChart"
], function(BaseChart) {

    class LineChart extends BaseChart {

        prepareData(aData, oConfig) {
            const oData = super.prepareData(aData, oConfig);
            const commonParams = {
                type: 'scatter',
                    line: {
                        color: 'rgb(55, 128, 191)',
                        width: 1
                }
            }
            return [
                ...oData.meas.map((item, i) => {
                    return Object.assign({}, {
                        x: oData.dim,
                        y: item,
                        text: item.map(value => String(+value.toFixed(0))),
                    }, commonParams)
                })
                // {
                //     y: aData.map(item => +item.value.toFixed(0)),
                //     x: aData.map(item => {
                //         const key = Object.keys(item).find(key => key !== "value");
                //         return item[key];
                //     }),
                //     type: 'scatter',
                //     line: {
                //         color: 'rgb(55, 128, 191)',
                //         width: 1
                //     }
                //   }
            ];
        }
    
    }
    return LineChart;
});