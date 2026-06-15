function Button(){

    const handleClick = (e) => {
        //alert('Hello');
        console.log(e.target.textContent);
    };

    return(<button onClick={handleClick}>click me</button>);
}

export default Button