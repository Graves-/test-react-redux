const error = (store) => (next) => (action) => {
    try{
        next(action);
    }catch(e){
        console.log('Error caught! ', e);
    }
};
export default error;