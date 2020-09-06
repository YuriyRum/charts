class BaseChart {

    constructor(oParams) {
        this.id = oParams.id;
        this.layout = {
            // title: 'Data',
            showlegend: oParams.showLegend || false,
            yaxis: {
                title: {
                    text: 'y Axis',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f'
                    }
                },
                automargin: true,
                showgrid: false
            },
            xaxis: {
                title: {
                    text: 'x Axis',
                    font: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f'
                    }
                },
                automargin: true,
                showgrid: false
            },
            paper_bgcolor: 'rgba(66, 215, 245, .3)',
            plot_bgcolor: 'transparent'
        };
        this.config = {
            scrollZoom: oParams.scrollZoom || true,
            displayModeBar: false,
            responsive: true
        };
        this._exist = false;
        this.valueFieldname = "value";
        this.colors = Plotly.d3.scale.category10();
    }

    draw(aData, oConfig) {
        const oData = this.prepareData(aData, oConfig);
        this._exist?
            Plotly.animate(this.id, {
                data: oData, 
                layout: this.layout, 
                traces: [0]
            }):
            Plotly.newPlot(this.id, oData, this.layout, this.config);
        this._exist = true;
    }

    prepareData(aData, oConfig) { 
        this._sortData(aData, oConfig);
        return {
            dim: this._prepareAxis(aData, oConfig.dim),
            meas: this._prepareAxis(aData, oConfig.meas)
        };
    }

    exit() {
        this._exist = false;
        Plotly.purge(this.id);
    }

    _prepareAxis(aData, axisFields) {
        return aData.reduce((dim, item) => {
            // const keys = Object.keys(item);
            if(dim.length === 0) {
                dim = Array.from(Array(axisFields.length), () => []);
            };
            axisFields.forEach((key, i) => {
                dim[i].push(item[key]);
            });
            return dim;
        }, []);
    }

    _sortData(aData, oConfig) {
        console.log(aData);
        aData.sort((first, second) => {
            let res = 0;
            for(let i = 0; i < oConfig.dim.length; i++) {
                const item = oConfig.dim[i];
                if(first[item] < second[item]) {
                    res = -1;
                    break;
                };
                if(first[item] > second[item]) {
                    res = 1;
                    break;
                }; 
            };
            return res;
        });
        console.log(aData);
    }
}