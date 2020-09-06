sap.ui.define([

], function() {

    class ChartFactory {

        static create(type, oParams) {
            switch(type) {
                case "barchart":
                    return new BarChart(oParams);
                case "HBarChart":
                    return new HBarChart(oParams);
                case "PieChart":
                    return new PieChart(oParams);
                case "LineChart":
                    return new LineChart(oParams);
                case "bubblechart":
                    return new BubbleChart(oParams);
                default:
                    return null;
            }
        }
    }

    return ChartFactory;
})