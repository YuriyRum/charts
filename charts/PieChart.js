sap.ui.define([
    "BaseChart"
], function(BaseChart) {

    class PieChart extends BaseChart {

        prepareData(aData, oConfig) {
            const oData = super.prepareData(aData, oConfig);
            const commonParams = {
                textinfo: "label+percent",
                type: 'pie',
                automargin: true,
                textposition: "outside"
            };
            return [
                ...oData.meas.map((item, i) => {
                    return Object.assign({}, {
                        values: item.map(value => +value.toFixed(0)),
                        labels: oData.dim.reduce((labels, item) => {
                            if(labels.length === 0) {
                                labels = Array.from(Array(item.length), () => []);
                            };
                            item.forEach((text, i) => labels[i].push(text));
                            return labels;
                        }, []).map(item => item.join("|")),
                    }, commonParams)
                })
            ];
        }
    
    }
    return PieChart;
}); 