
export const sortHelper = {
    sort,
}

function sort(event, tableData) {
    let data = [...tableData];
    data.sort((data1, data2) => {
        const value1 = data1[event.field];
        const value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = 1;
        else if (value1 != null && value2 == null)
            result = -1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2, undefined, { numeric: true });
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });

    return data;
}