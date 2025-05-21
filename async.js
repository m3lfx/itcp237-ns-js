function fetchData(callback) {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            callback(data);
        }, 5000);
    }
    
    fetchData(function(data) {
        console.log(data); // Output after 1 second
    });
    console.log('test')