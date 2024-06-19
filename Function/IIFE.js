// Immediately Invoked Function expressions (IIFE)
(function arda(){
     console.log('DB CONNECTED');
}) () ;

// ; provides context where to end

// arda()
/** to avoid global scope pollution */
//syntax 
((name) => {
    console.log(`DB CONNECTED ${name}`);
})('sawaiz')