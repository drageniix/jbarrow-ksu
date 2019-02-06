import db from '../../database/firebase';
import { updateStocks } from './actions/common';

export default store => {
    db.onSnapshot(function(querySnapshot) {
        var stocks = [];
        querySnapshot.forEach(function(doc) {
            stocks.push(doc.data());
        });

        store.dispatch(updateStocks(stocks));
    });
};
