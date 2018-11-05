export class SortedTable {
    order = '';
    reverse = true;

   /**
    * This function is REQUIRED for ngx-order-pipe Sorting
    * @param value
    */
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
}
