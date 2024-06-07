const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const task1 = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

const  task2 = (notifications) => {
  return notifications.reduce((arr, notification) => {
      const { source, text, date } = notification;
      if (!arr[source]) {
        arr[source] = [];
      }
      arr[source].push({ text, date });
      return arr;
  }, {});
}
const notifications = [
  { source: "phone", text: "hi", date: "25.06.2024" },
  { source: "PC", text: "sup", date: "26.06.2024" },
  { source: "server", text: "whats new", date: "27.06.2024" },
];

const notification2 = task2(notifications);



console.log(arr.filter(task1)); 
console.log(notification2);