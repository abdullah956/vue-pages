const pagesKey = 'pages';
let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);
export default {
    getAllPages(){
        console.log("al pages ")
        return pagesStore;
    },
    getSinglePage(index){
        return pagesStore[index];
    }
}