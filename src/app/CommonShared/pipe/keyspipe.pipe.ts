import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class keysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        return this.convert(value);
    }

    private convert(value: any) {
        let keys = [];
        for (let key in value) {
            if (value[key] instanceof Array && value[key].length > 0 && this.isAnObject(value[key][0])) {
                value[key].forEach(element => {
                    let tempKeys: any = this.convert(element);
                    let i = 0;
                    tempKeys.forEach(f => {
                        keys.push({ key: key + "[" + i + "]." + f['key'], value: f["value"] });
                        i++;
                    });

                });
            } else if (this.isAnObject(value[key])) {
                let tempKeys = this.convert(value[key]);
                tempKeys.forEach(element1 => {
                    keys.push({ key: key + "." + element1['key'], value: element1["value"] });
                });
            } else {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }

    public isAnObject = function (value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    }
}