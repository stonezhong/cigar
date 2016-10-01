import $ from 'jquery';
import * as C from 'cigar';
import { format } from 'util';

export function run(statement) {
    $(function() {
        statement.run().then(
            () => {
                printf("Done");
            },
            (e) => {
                printf(`got error: ${e}`);
            }
        );
    });
}

export const printf = C.promisify(function() {
    $("#output").append($(`<pre>${format.apply(null, arguments)}</pre>`));
});

export function log(format, ... args) {
    return Promise.all(args.map(arg => Promise.resolve(arg))).then(
        (values) => {
            values.unshift(format);
            return console.log.apply(console, values);
        }
    );
}
