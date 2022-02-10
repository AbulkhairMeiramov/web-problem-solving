const cols = ['Red', 'Yellow', 'Green', 'Blue'];

let cnt = 0;

const countOfColor = () => {
    for (let i = 1; i < cols.length; i++) {
        if(cols[i] === cols[i + 1]) {
            cnt = 0;
        } else if(cols[i] !== cols[i + 1]) {
            cnt++;
        }
    }

    return cols.length * 2 + cnt;
}

console.log(countOfColor(cols));