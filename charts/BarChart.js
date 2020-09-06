sap.ui.define([
    "BaseChart"
], function(BaseChart) {

    class BarChart extends BaseChart {

        prepareData(aData, oConfig) {
            const oData = super.prepareData(aData, oConfig);
            const commonParams = {
                type: 'bar',
                textposition: "auto"
            };
            return [
                ...oData.meas.map((item, i) => {
                    return Object.assign({}, {
                        x: oData.dim,
                        y: item,
                        text: item.map(value => String(+value.toFixed(0))),
                        marker: {
                            color: this.colors(i),
                            opacity: 0.7,
                        }
                    }, commonParams)
                })
            ];
        }
    
    }
    return BarChart;
});