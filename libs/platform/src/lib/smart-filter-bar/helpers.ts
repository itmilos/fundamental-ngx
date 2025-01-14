import { isSelectItem } from '@fundamental-ngx/platform/shared';

export function getSelectItemValue(item: any): any {
    if (Array.isArray(item)) {
        item = item.map((i) => getSelectItemValue(i));
    }

    return isSelectItem(item) ? item.value : item;
}
