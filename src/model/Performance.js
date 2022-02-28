export default class Performance {
    /**
     * User Performance Datas
     *
     * @param { object } json
     * @returns { Performance }
     */
    
     constructor(id, data) {
        this.userId = id;
        this.data = data;
    }
}