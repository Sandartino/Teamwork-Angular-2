import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(items: any, sortAndOrder: string[]): any[] {
        let sortBy = sortAndOrder[0];
        let orderBy = sortAndOrder[1];

        if (sortBy === 'Date') {
            if (orderBy === 'Ascending') {
                    return items.sort((x, y) => {
                        if (x['_kmd']['lmt'] > y['_kmd']['lmt']) {
                            return 1;
                        }
                        if (x['_kmd']['lmt'] < y['_kmd']['lmt']) {
                            return -1;
                        }
                        return 0;
                    });
                } else {
                    return items.sort((x, y) => {
                        if (x['_kmd']['lmt'] > y['_kmd']['lmt']) {
                            return -1;
                        }
                        if (x['_kmd']['lmt'] < y['_kmd']['lmt']) {
                            return 1;
                        }
                        return 0;
                    });
                }
        } else if(sortBy === 'Title') {
            if (orderBy === 'Ascending') {
            return items.sort((x, y) => {
                if (x[sortBy] > y[sortBy]) {
                    return 1;
                }
                if (x[sortBy] < y[sortBy]) {
                    return -1;
                }
                return 0;
            });
            } else {
                return items.sort((x, y) => {
                    if (x[sortBy] > y[sortBy]) {
                        return -1;
                    }
                    if (x[sortBy] < y[sortBy]) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
    }
}
