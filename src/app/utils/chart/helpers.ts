type typeCharts = 'short' | 'detailed';

export interface chartDataArgs {
    data: Array<number | undefined>,
    type?: typeCharts | undefined
}

export const chartData = ({ data, type }: chartDataArgs) => {
    if (type === 'short') return {
        labels: [],
        datasets: [{
            label: '',
            data,
            backgroundColor: [
                '#F4BE37',
                '#F5F8FA'
            ]
        }],
    };

    return {
        labels: [],
        datasets: [{
            label: '',
            data: data,
            backgroundColor: [
                '#2471CC',
                '#35BB73',
                '#F4BE37'
            ]
        }],
        options: {
            plugins: {
                tooltip: {
                    enabled: false
                }
            }
        }
    };
}