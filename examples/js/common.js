export function run(statement) {
    statement.run().then(
        () => {
            console.log("Done");
        },
        (e) => {
            console.log(`got error: ${e}`);
        }
    );
}

export function log(format, ... args) {
    return Promise.all(args.map(arg => Promise.resolve(arg))).then(
        (values) => {
            values.unshift(format);
            return console.log.apply(console, values);
        }
    );
}