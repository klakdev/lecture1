
function loadData() {
    const rawData = file.read();
    const data:string[] = rawData.split("\n");
    return data.reduce((p, c) => {
        const [k, v] = c.split(":")
        p[k] = parseInt(v);
        return p;
    }, {} as {[key in string]: number})
}

const index = loadData();

function updateIndex(id: string, i: number) {
    // 1. update cache
    // 2. update disk
    file.write();
    index[id] = i;
}
