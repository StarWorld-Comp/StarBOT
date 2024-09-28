module.exports = [{
  name: "$FormatTime",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [duration] = data.inside.splits;
    const units = {
        's': 'секунда',
        'm': 'минута',
        'h': 'час',
        'd': 'день',
        'w': 'неделя',
        'mo': 'месяц',
        'y': 'год'
    };
    const pluralUnits = {
      's': (num) => num % 10 === 1 && num % 100 !== 11 ? 'секунда' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'секунды' : 'секунд',
      'm': (num) => num % 10 === 1 && num % 100 !== 11 ? 'минута' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'минуты' : 'минут',
      'h': (num) => num % 10 === 1 && num % 100 !== 11 ? 'час' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'часа' : 'часов',
      'd': (num) => num % 10 === 1 && num % 100 !== 11 ? 'день' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'дня' : 'дней',
      'w': (num) => num % 10 === 1 && num % 100 !== 11 ? 'неделя' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'недели' : 'недель',
      'mo': (num) => num % 10 === 1 && num % 100 !== 11 ? 'месяц' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'месяца' : 'месяцев',
      'y': (num) => num % 10 === 1 && num % 100 !== 11 ? 'год' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) ? 'года' : 'лет'
    };
    const match = duration.match(/^(\d+)([a-z]+)$/);
      if (!match) {
        return d.aoiError.fnError(d, "custom", {}, "Вы указали неправильный формат времени.");
      }
    const [_, number, unit] = match;
    const num = parseInt(number, 10);
    const unitName = pluralUnits[unit](num);
    const a = `${num} ${unitName}`;
    data.result = a
    return {
      code: d.util.setCode(data)
    };
  }
},{
    name: "$progressBar",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [fullStart, emptyStart, fullBar, emptyBar, fullEnd, emptyEnd, value, maxValue, size] = data.inside.splits;
      let errors = []
        
        !fullStart || fullStart == '' ? errors.push('"fullStart" - Param 1 is not provided!') : !emptyStart || emptyStart == '' ? errors.push('"emptyStart" - Param 2 is not provided!') : !fullBar || fullBar == '' ? errors.push('"fullBar" - Param 3 is not provided!') : !emptyBar || emptyBar == '' ? errors.push('"emptyBar" - Param 4 is not provided!') : !fullEnd || fullEnd == '' ? errors.push('"fullEnd" - Param 5 is not provided!') : !emptyEnd || emptyEnd == '' ? errors.push('"emptyEnd" - Param 6 is not provided!') : !size || size == '' || parseInt(size) < 10 ? errors.push('"size" cannot be less than 10 or empty') : null
        
      if(errors.length >= 1) {
        data.result = errors.join('\n')
      } else {
        
        let barArr = [];
        let full = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
        let empty = size - full > 0 ? size - full : 0;
        
        for (let i = 1; i <= full; i++) barArr.push(fullBar);
        for (let i = 1; i <= empty; i++) barArr.push(emptyBar);
        
        barArr[0] = barArr[0] == fullBar ? fullStart : emptyStart;
        barArr[barArr.length - 1] = barArr[barArr.length - 1] == fullBar ? fullEnd : emptyEnd;
        const bar = barArr.join(``);
        
        data.result = bar;
      }
      return {
        code: d.util.setCode(data),
      };
    }
  }];