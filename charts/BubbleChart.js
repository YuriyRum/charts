sap.ui.define([
    "BaseChart"
], function(BaseChart) {

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
            ];
        }
    
    }
    return BubbleChart;
});