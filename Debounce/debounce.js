const  input = document.querySelector('input');

function inputClickFunc(e){
    console.log(e.target.value);
}

function debounce(f,d, immediate = false){
    let  timerId;

    return function(...args){
        clearTimeout(timerId)
        const shouldCallImmediately = timerId == null && immediate;

        if(shouldCallImmediately){
            f.apply(this, args)
        }

        timerId = setTimeout(() => {
            if(!immediate){
                f.apply(this, args)
            }
            timerId = null
        }, d)
    }
}

const inputDebounceClick = debounce(inputClickFunc, 500, true)

input.addEventListener('input', inputDebounceClick)