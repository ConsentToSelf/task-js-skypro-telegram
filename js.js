const checkMoney = (params) => {
    params = prompt("Напиши свою заработную плату");
    if (params <= 50000) {
        alert(`твоя заработная плата ${params}, необходимо искать новую работу`);
    } else if (isNaN(params)) {
        alert("параметр не является числом");
    } else {
        alert("остаться на работе");
    }
};
checkMoney();