import $ from 'jquery';
import * as C from 'cigar';
import { format } from 'util';

export function run(statement) {
    let execute = function() {
        C.executeProgram(statement).then(
            () => {
                printf("Done");
            },
            (e) => {
                printf(`got error: ${e}`);
            }
        );
    };

    $(function() {
        $(execute);

        $("#run").click(() => {
            $("#output").empty();
            execute();
        });
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
