const events = new Map();
export default {
    $on(eventName,fn){
        //console.log(fn)
        if (!events.has(eventName)){
            events.set(eventName,[]);
        }
        events.get(eventName).push(fn);
    },
    // $off(eventName,fn){
    //     throw {message : 'not implemented'};

    // },
    $emit(eventName,data){
        if (events.has(eventName)){
            //console.log('emit')
            events.get(eventName).forEach(fn => fn(data));
        }
    }
};
//component emitted events do not bubble
//Unlike native DOM events, component emitted events do not bubble. You can only listen to the events emitted by a direct child component. If there is a need to communicate between sibling or deeply nested components, use an external event bus or a global state management solution.