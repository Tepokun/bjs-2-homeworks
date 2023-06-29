// 1. `constructor` — выделяет память для объекта. 
//   * Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива. 
//   * Создайте свойство `intervalId` для хранения `id` таймера без начального значения.

class AlarmClock {
    constructor () {
        this.alarmCollectionv = [];
        this.intervalId = null;

    }
    // 2. `addClock` — добавляет новый звонок в коллекцию существующих. 
//   * Принимает параметр времени в формате `HH:MM` — время, когда действие должно запуститься.
//   * Принимает параметр функции-колбека — действие, которое должно запуститься.
//   * Проверьте, переданы ли параметры времени и колбека. Если параметр не передан, выполните выброс ошибки с помощью `throw new Error('Отсутствуют обязательные аргументы')`.
//   * Проверьте, есть ли звонок с таким же временем. Если есть, выведите предупреждение в консоль с помощью `console.warn('Уже присутствует звонок на это же время')`.
//   * Перед завершением метода добавьте в массив звонков объект со свойствами `callback`, `time`, `canCall`. В свойстве `canCall` должно быть значение запуска функции колбека. Изначально значением должно быть `true`.
    
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if(this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }
        this.alarmCollection.push({time, callback, canCall: true});
    }

    // 3. `removeClock` — удаляет звонки по определённому времени.
    //   * Принимает `time` звонка, который следует удалить.
    //   * Удалите из массива звонков те, у которых `time` совпадает со значением аргумента. Например, можно использовать метод `filter`.
    removeClock(time) {
        this.alarmcollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    // 4. `getCurrentFormattedTime` — возвращает текущее время в строковом формате `HH:MM`.
    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        return '${hours} : ${minutes}';
    }

    // 5. `start` — запускает будильник.
    //   * Проверьте наличие значения в свойстве `intervalId`. Если в нём присутствует значение, то завершайте выполнение метода. Программа не должна позволять создавать несколько интервалов.
    //   * Создавайте новый интервал, в котором каждую секунду выполняйте действия:
    //      - Перебирайте все звонки с помощью метода `forEach`.
    //      - При переборе каждый звонок проверяйте на возможность его запуска: *свойство `time` совпадает с текущим временем, и звонок может выполняться (в свойстве `canCall` находится `true`)*.
    //     3. При истином условии (необходимости запуска звонка) в свойство `canCall` (возможность вызова звонка) присваивайте `false` и вызывайте колбек звонка (свойство `callback`).
    //   * Результат создания интервала сохраняйте в свойство `intervalId`.
    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval (() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmcollection.forEach((alarm) => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }
}





// 6. `stop` — останавливает выполнение интервала будильника.
//   * Вызовите функцию `clearInterval` для удаления интервала.
//   * Сбросьте значение из свойства `intervalId`. Для сброса свойства можно присваивать `null`.

// 7. `resetAllCalls` — сбрасывает возможность запуска всех звонков.
//   * С помощью метода `forEach` присваивайте `true` в свойство `canCall` у каждого звонка.

// 8. `clearAlarms` — удаляет все звонки.
//   * Вызывает метод остановки интервала (метод `stop`).
//   * Удаляет все звонки. Для удаления всех звонков переприсваивайте свойство `alarmCollection` в пустой массив.