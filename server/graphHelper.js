var sampleDataArr = require('./sampleData.json')
var moment = require('moment')

let acceptMap = new Map();
let rejectMap = new Map();
let errMap = new Map();
let totalMap = new Map();

module.exports.dataExtractor = async (data) => {
  var res = {
    data: []
  }
  
  return new Promise(async function (resolve, reject) {
    var model = {}

    model.startDate = moment(data.startDate, 'YYYY-MM-DD')
    model.endDate = moment(data.endDate, 'YYYY-MM-DD')
    let diff = model.endDate.diff(model.startDate, 'days')
    var responseArr = [], acceptArr = [], rejectArr = [], totalArr = [], errArr = []
    await sampleDataArr.forEach(async (el) => {
      model.data = el.date
      await extractdate(model, el, responseArr)
    })
    if (diff <= 7) {
      function compare(a, b) {
        if (a.date > b.date) { return 1 }
        else { return -1 }
      }
      await responseArr.sort(compare)
      await responseArr.forEach(item => {
        if (totalMap.has(item.date)) {
          totalMap.set(item.date, totalMap.get(item.date) + item.amount);
        } else {
          totalMap.set(item.date, item.amount);
        }
        if (item.status === 'ACCEPT') {
          if (acceptMap.has(item.date)) {
            acceptMap.set(item.date, item.amount + acceptMap.get(item.date));
          } else {
            acceptMap.set(item.date, item.amount);
          }
        } else if (item.status === 'ERR') {
          if (errMap.has(item.date)) {
            errMap.set(item.date, item.amount + errMap.get(item.date));
          } else {
            errMap.set(item.date, item.amount);
          }
        } else if (item.status === 'REJECT') {
          if (rejectMap.has(item.date)) {
            rejectMap.set(item.date, item.amount + rejectMap.get(item.date));
          } else {
            rejectMap.set(item.date, item.amount);
          }
        }
      });
      if (responseArr.length > 0) {

        for (let i = 0; i <= diff; i++) {
          totalArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: totalMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          acceptArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: acceptMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          rejectArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: rejectMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          errArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: errMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
        }
        res['data'] = [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Accept",
          dataPoints: acceptArr
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##",
          name: "Reject",
          dataPoints: rejectArr
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Err",
          dataPoints: errArr
        },
        {
          type: "spline",
          showInLegend: true,
          yValueFormatString: "##",
          name: "Total",
          dataPoints: totalArr
        }]

      }
    }
    else if (diff > 7 && diff < 90) {
      let weekDiff = model.endDate.diff(model.startDate, 'weeks')
      function compare(a, b) {
        if (a.date > b.date) { return 1 }
        else { return -1 }
      }
      await responseArr.sort(compare)
      await responseArr.forEach(item => {
        if (totalMap.has(item.date)) {
          totalMap.set(item.date, totalMap.get(item.date) + item.amount);
        } else {
          totalMap.set(item.date, item.amount);
        }
        if (item.status === 'ACCEPT') {
          if (acceptMap.has(item.date)) {
            acceptMap.set(item.date, item.amount + acceptMap.get(item.date));
          } else {
            acceptMap.set(item.date, item.amount);
          }
        } else if (item.status === 'ERR') {
          if (errMap.has(item.date)) {
            errMap.set(item.date, item.amount + errMap.get(item.date));
          } else {
            errMap.set(item.date, item.amount);
          }
        } else if (item.status === 'REJECT') {
          if (rejectMap.has(item.date)) {
            rejectMap.set(item.date, item.amount + rejectMap.get(item.date));
          } else {
            rejectMap.set(item.date, item.amount);
          }
        }
      });
      if (responseArr.length > 0) {

        for (let i = 0; i <= diff; i++) {
          totalArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: totalMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          acceptArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: acceptMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          rejectArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: rejectMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          errArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: errMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
        }

        var newAcceptArr = [], newRejectArr = [], newTotalArr = [], newErrArr = []
        await dataSorter(totalArr, newTotalArr)
        await dataSorter(acceptArr, newAcceptArr)
        await dataSorter(rejectArr, newRejectArr)
        await dataSorter(errArr, newErrArr)

        res['data'] = [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Accept",
          dataPoints: newAcceptArr
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##",
          name: "Reject",
          dataPoints: newRejectArr
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Err",
          dataPoints: newErrArr
        },
        {
          type: "spline",
          showInLegend: true,
          yValueFormatString: "##",
          name: "Total",
          dataPoints: newTotalArr
        }]

      }
    }
    else {
      let weekDiff = model.endDate.diff(model.startDate, 'weeks')
      function compare(a, b) {
        if (a.date > b.date) { return 1 }
        else { return -1 }
      }
      await responseArr.sort(compare)
      await responseArr.forEach(item => {
        if (totalMap.has(item.date)) {
          totalMap.set(item.date, totalMap.get(item.date) + item.amount);
        } else {
          totalMap.set(item.date, item.amount);
        }
        if (item.status === 'ACCEPT') {
          if (acceptMap.has(item.date)) {
            acceptMap.set(item.date, item.amount + acceptMap.get(item.date));
          } else {
            acceptMap.set(item.date, item.amount);
          }
        } else if (item.status === 'ERR') {
          if (errMap.has(item.date)) {
            errMap.set(item.date, item.amount + errMap.get(item.date));
          } else {
            errMap.set(item.date, item.amount);
          }
        } else if (item.status === 'REJECT') {
          if (rejectMap.has(item.date)) {
            rejectMap.set(item.date, item.amount + rejectMap.get(item.date));
          } else {
            rejectMap.set(item.date, item.amount);
          }
        }
      });
      if (responseArr.length > 0) {

        for (let i = 0; i <= diff; i++) {
          totalArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: totalMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          acceptArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: acceptMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          rejectArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: rejectMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
          errArr.push({ label: moment(data.startDate, 'YYYY-MM-DD').add(i, 'days').format('DD MMM, YYYY'), y: errMap.get(moment(data.startDate, "YYYY-MM-DD").add(i, 'days').format('MM/DD/YYYY')) || 0 })
        }

        var newAcceptArr = [], newRejectArr = [], newTotalArr = [], newErrArr = []
        await monthDataSorter(totalArr, newTotalArr)
        await monthDataSorter(acceptArr, newAcceptArr)
        await monthDataSorter(rejectArr, newRejectArr)
        await monthDataSorter(errArr, newErrArr)

        res['data'] = [{
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Accept",
          dataPoints: newAcceptArr
        },
        {
          type: "spline",
          showInLegend: true,
          visible: true,
          yValueFormatString: "##",
          name: "Reject",
          dataPoints: newRejectArr
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "##",
          name: "Err",
          dataPoints: newErrArr
        },
        {
          type: "spline",
          showInLegend: true,
          yValueFormatString: "##",
          name: "Total",
          dataPoints: newTotalArr
        }]

      }
    }
    console.log(JSON.stringify(res))
    return resolve(res)
  })

}

function monthDataSorter(arr, newArr) {
  for (let i = 0; i < arr.length;) {
    let sum = 0
    for (let j = i; j < i + 30; j++) {
      if (arr[j] && arr[j].y) {
        sum = sum + arr[j].y
      }
    }
    newArr.push({
      label: arr[i].label,
      y: sum
    })
    i += 30
  }
  return newArr
}

function dataSorter(arr, newArr) {
  for (let i = 0; i < arr.length;) {
    let sum = 0
    for (let j = i; j < i + 7; j++) {
      if (arr[j] && arr[j].y) {
        sum = sum + arr[j].y
      }
    }
    newArr.push({
      label: arr[i].label,
      y: sum
    })
    i += 7
  }
  return newArr
}

function extractdate(model, ele, responseArr) {
  return new Promise(function (resolve, reject) {
    let minDate = moment(model.startDate).format('DD-MM-YYYY')
    let maxDate = moment(model.endDate).format('DD-MM-YYYY')

    fetchDate({ input: moment(ele.date, 'MM/DD/YYYY').format('DD-MM-YYYY'), max: maxDate, min: minDate })
      .then((out) => {
        if (out.validated) {
          responseArr.push(ele)
        }
        return responseArr
      })
      .catch((e) => {
        console.log(e);
        return reject(e);
      });
  });
}

function fetchDate(data) {
  return new Promise(function (resolve, reject) {
    try {
      let inp = data.input.toLowerCase();
      inp = inp.replace("of", "");
      inp = inp.replace("on", "");
      inp = inp.replace("in", "");
      inp = inp.replace("at", "");
      data.data = inp;
      let minDateValue = data.min ? data.min.split("-") : [01, 01, 1970];
      let maxDateValue = data.max ? data.max.split("-") : [31, 12, 2100];
      minDateValue = Date.parse(
        minDateValue[2] + "-" + minDateValue[1] + "-" + minDateValue[0]
      );
      maxDateValue = Date.parse(
        maxDateValue[2] + "-" + maxDateValue[1] + "-" + maxDateValue[0]
      );
      data.validated = false;
      var now = new Date();
      if (
        inp.match(
          /(\d{2}[-\/\.\s](\d{2}|\d{1})|\d{1}[-\/\.\s](\d{2}|\d{1}))([-\/\.\s](\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /(\d{2}[-\/\.\s](\d{2}|\d{1})|\d{1}[-\/\.\s](\d{2}|\d{1}))([-\/\.\s](\d{4}|\d{2}))?/
        )[0];
        while (form.includes(".") || form.includes("-") || form.includes(" "))
          form = form.replace("-", "/").replace(".", "/").replace(" ", "/");
        var day = parseInt(form.split("/")[0]);
        var month = parseInt(form.split("/")[1]);
        var year = parseInt(form.split("/")[2])
          ? parseInt(form.split("/")[2])
          : now.getFullYear();
        if (year < 70) year += 2000;
        else if (year > 69 && year < 100) year += 1900;
        if (
          day < 32 &&
          (month == 01 ||
            month == 03 ||
            month == 05 ||
            month == 07 ||
            month == 08 ||
            month == 10 ||
            month == 12)
        ) {
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else if (
          day < 31 &&
          (month == 04 || month == 06 || month == 09 || month == 11)
        ) {
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else if (
          day < 30 &&
          month == 02 &&
          ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        ) {
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else if (day < 29 && month == 02) {
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else {
          // console.log('Invalid')
          data.validated = false;
          return resolve(data);
        }
      } else if (inp.match(/\s*day\safter\s*(tom(morrow)?\s*)?/)) {
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        date += 2;
        // console.log(date+'/'+month+'/'+year)
        let userDateValue = Date.parse(year + "-" + month + "-" + date);
        if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
          data.validated = true;
          data.data = date + "/" + month + "/" + year;
          return resolve(data);
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (inp.match(/\s*tom(morrow)?\s*/)) {
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        date += 1;
        // console.log(date+'/'+month+'/'+year)
        let userDateValue = Date.parse(year + "-" + month + "-" + date);
        if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
          data.validated = true;
          data.data = date + "/" + month + "/" + year;
          return resolve(data);
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (inp.match(/\s*(today)\s*/)) {
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        // console.log(date+'/'+month+'/'+year)
        let userDateValue = Date.parse(year + "-" + month + "-" + date);
        if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
          data.validated = true;
          data.data = date + "/" + month + "/" + year;
          return resolve(data);
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (inp.match(/\s*(day before yesterday|day before)\s*/)) {
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        date -= 2;
        if (
          date == 0 &&
          (month == 04 ||
            month == 06 ||
            month == 08 ||
            month == 09 ||
            month == 11)
        ) {
          month -= 1;
          date = 31;
        } else if (
          date == 0 &&
          (month == 01 ||
            month == 02 ||
            month == 05 ||
            month == 07 ||
            month == 10 ||
            month == 12)
        ) {
          month -= 1;
          date = 30;
        } else if (
          date == 0 &&
          month == 03 &&
          ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        ) {
          month -= 1;
          date = 29;
        } else if (date == 0 && month == 03) {
          month -= 1;
          date = 28;
        } else if (
          date == -1 &&
          (month == 04 ||
            month == 06 ||
            month == 08 ||
            month == 09 ||
            month == 11)
        ) {
          month -= 1;
          date = 30;
        } else if (
          date == -1 &&
          (month == 01 ||
            month == 02 ||
            month == 05 ||
            month == 07 ||
            month == 10 ||
            month == 12)
        ) {
          month -= 1;
          date = 29;
        } else if (
          date == -1 &&
          month == 03 &&
          ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        ) {
          month -= 1;
          date = 28;
        } else if (date == -1 && month == 03) {
          month -= 1;
          date = 27;
        }
        // console.log(date+'/'+month+'/'+year)
        let userDateValue = Date.parse(year + "-" + month + "-" + date);
        if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
          data.validated = true;
          data.data = date + "/" + month + "/" + year;
          return resolve(data);
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (inp.match(/\s*(yesterday)\s*/)) {
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        date -= 1;
        if (
          date == 0 &&
          (month == 04 ||
            month == 06 ||
            month == 08 ||
            month == 09 ||
            month == 11)
        ) {
          month -= 1;
          date = 31;
        } else if (
          date == 0 &&
          (month == 01 ||
            month == 02 ||
            month == 05 ||
            month == 07 ||
            month == 10 ||
            month == 12)
        ) {
          month -= 1;
          date = 30;
        } else if (
          date == 0 &&
          month == 03 &&
          ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        ) {
          month -= 1;
          date = 29;
        } else if (date == 0 && month == 03) {
          month -= 1;
          date = 28;
        }
        // console.log(date+'/'+month+'/'+year)
        let userDateValue = Date.parse(year + "-" + month + "-" + date);
        if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
          data.validated = true;
          data.data = date + "/" + month + "/" + year;
          return resolve(data);
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (
        inp.match(/\s*after\s*(\d|\d{2})\s*(months|month|weeks|week|days|day)/)
      ) {
        var form = inp.match(
          /\s*after\s*(\d|\d{2})\s*(months|month|weeks|week|days|day)/
        )[0];
        var number = parseInt(form.match(/\d+/)[0]);
        var duration = form.match(/months|month|weeks|week|days|day/)[0];
        var year = now.getFullYear();
        if (duration.includes("month") && number < 13) {
          var date = now.getDate();
          var month = now.getMonth() + 1;
          month += number;
          if (month > 12) {
            year += 1;
            month -= 12;
          }
          // console.log(date+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + date);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = date + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        }
        if (duration.includes("week") && number < 5) {
          duration = "day";
          number = number * 7;
        }
        if (duration.includes("day") && number < 30) {
          var date = now.getDate();
          var month = now.getMonth() + 1;
          date += number;
          if (
            month == 04 ||
            month == 06 ||
            month == 07 ||
            month == 09 ||
            month == 11
          ) {
            if (date > 30) {
              date -= 30;
              month += 1;
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            } else {
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            }
          } else if (
            month == 01 ||
            month == 03 ||
            month == 05 ||
            month == 08 ||
            month == 10 ||
            month == 12
          ) {
            if (date > 31) {
              date -= 31;
              month += 1;
              if (month > 12) {
                month -= 12;
                year += 1;
              }
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            } else {
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            }
          } else if (month == 02) {
            if (date > 28) {
              date -= 28;
              month += 1;
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            } else {
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            }
          } else if (
            (month == 02 && year % 4 == 0 && year % 100 != 0) ||
            year % 400 == 0
          ) {
            if (date > 29) {
              date -= 29;
              month += 1;
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            } else {
              // console.log(date+'/'+month+'/'+year)
              let userDateValue = Date.parse(year + "-" + month + "-" + date);
              if (
                minDateValue <= userDateValue &&
                userDateValue <= maxDateValue
              ) {
                data.validated = true;
                data.data = date + "/" + month + "/" + year;
                return resolve(data);
              } else {
                data.validated = false;
                return resolve(data);
              }
            }
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else {
          data.validated = false;
          return resolve(data);
        }
      } else if (
        inp.match(
          /\d{1,2}(\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of)?\s*(april|apr|APRIL|APR|Apr|April|june|jun|JUNE|JUN|Jun|June|september|sept|sep|SEPTEMBER|SEPT|SEP|Sept|September|november|nov|NOVEMBER|NOV|Nov|November)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /\d{1,2}(\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of)?\s*(april|apr|APRIL|APR|Apr|April|june|jun|JUNE|JUN|Jun|June|september|sept|sep|SEPTEMBER|SEPT|SEP|Sept|September|november|nov|NOVEMBER|NOV|Nov|November)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/(\d)+/)[0]);
        console.log(form);
        if (day < 1 || day > 30) {
          console.log("Invalid date");
          data.validated = false;
          return resolve(data);
        } else {
          console.log("---()---");
          while (form.includes(".") || form.includes("-") || form.includes(" "))
            form = form.replace("-", "/").replace(".", "/").replace(" ", "/");
          // var year = parseInt(form.split("/")[2]) ? parseInt(form.split("/")[2]) : now.getFullYear()
          var year = parseInt(form.split("/")[2])
            ? parseInt(form.split("/")[2])
            : parseInt(form.match(/\d{4}/)[0]);

          if (year < 70) year += 2000;
          else if (year > 69 && year < 100) year += 1900;
          if (form.includes("apr") || form.includes("APR")) {
            var month = 04;
          } else if (form.includes("jun") || form.includes("JUN")) {
            var month = 06;
          } else if (form.includes("sep") || form.includes("SEP")) {
            var month = 09;
          } else if (form.includes("nov") || form.includes("NOV")) {
            var month = 11;
          }
          console.log(day + "/" + month + "/" + year);
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          console.log(minDateValue + "::::::::::::<<<<<<<<<<minDateValue");
          console.log(maxDateValue + "::::::::<<<<<<<<maxDateValue");
          console.log(userDateValue + ":::::::::<<<<<<<<userDateValue");
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        }
      } else if (
        inp.match(
          /\d{1,2}(\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of)?\s*(january|jan|JANUARY|JAN|march|mar|MARCH|MAR|may|MAY|july|jul|JULY|JUL|august|aug|AUGUST|AUG|october|oct|OCTOBER|OCT|december|dec|DECEMBER|DEC)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /(\d+\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of)?\s*(january|jan|JANUARY|JAN|march|mar|MARCH|MAR|may|MAY|july|jul|JULY|JUL|august|aug|AUGUST|AUG|october|oct|OCTOBER|OCT|december|dec|DECEMBER|DEC)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/(\d)+/)[0]);
        if (day < 1 && day > 32) {
          // console.log('Invalid date')
          return resolve(data);
        } else {
          while (form.includes(".") || form.includes("-") || form.includes(" "))
            form = form.replace("-", "/").replace(".", "/").replace(" ", "/");
          // var year = parseInt(form.split("/")[2]) ? parseInt(form.split("/")[2]) : now.getFullYear()
          var year = parseInt(form.split("/")[2])
            ? parseInt(form.split("/")[2])
            : parseInt(form.match(/\d{4}/)[0]);
          if (year < 70) year += 2000;
          else if (year > 69 && year < 100) year += 1900;
          if (form.includes("jan") || form.includes("JAN")) {
            var month = 01;
          } else if (form.includes("mar") || form.includes("MAR")) {
            var month = 03;
          } else if (form.includes("may") || form.includes("MAY")) {
            var month = 05;
          } else if (form.includes("jul") || form.includes("JUL")) {
            var month = 07;
          } else if (form.includes("aug") || form.includes("AUG")) {
            var month = 08;
          } else if (form.includes("oct") || form.includes("OCT")) {
            var month = 10;
          } else if (form.includes("dec") || form.includes("DEC")) {
            var month = 12;
          }
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        }
      } else if (
        inp.match(
          /\d{1,2}(\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of\s*)?(february|feb|FEBRUARY|FEB)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /(\d+\s*)?(-|\/|\.|(st)|(nd)|(rd)|(th)|\s)?\s*(of\s*)?(february|feb|FEBRUARY|FEB)(\s*[-|\/|\.|\s]?(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/(\d)+/)[0]);
        // var year = parseInt(form.split(" ")[2]) ? parseInt(form.split(" ")[2]) : now.getFullYear()
        var year = parseInt(form.split("/")[2])
          ? parseInt(form.split("/")[2])
          : parseInt(form.match(/\d{4}/)[0]);
        if (year < 70) year += 2000;
        else if (year > 69 && year < 100) year += 1900;
        if (day > 0 && day < 29) {
          var month = 02;
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else if (day == 29) {
          if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            var month = 02;
            // console.log(day+'/'+month+'/'+year)
            let userDateValue = Date.parse(year + "-" + month + "-" + day);
            if (
              minDateValue <= userDateValue &&
              userDateValue <= maxDateValue
            ) {
              data.validated = true;
              data.data = day + "/" + month + "/" + year;
              return resolve(data);
            } else {
              data.validated = false;
              return resolve(data);
            }
          } else {
            // console.log('Invalid date')
            data.validated = false;
            return resolve(data);
          }
        } else {
          // console.log('Invalid date')
          data.validated = false;
          return resolve(data);
        }
      } else if (
        inp.match(
          /(april|apr|APRIL|APR|june|jun|JUNE|JUN|september|sept|sep|SEPTEMBER|SEPT|SEP|november|nov|NOVEMBER|NOV)(\s)?(\d+)((\s)?(\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /(april|apr|APRIL|APR|june|jun|JUNE|JUN|september|sept|sep|SEPTEMBER|SEPT|SEP|november|nov|NOVEMBER|NOV)(\s)?(\d+)((\s)?(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/\d+/)[0]);
        if (day < 1 || day > 30) {
          // console.log('Invalid date')

          return resolve(data);
        } else {
          while (form.includes(".") || form.includes("-") || form.includes(" "))
            form = form.replace("-", "/").replace(".", "/").replace(" ", "/");
          // var year = parseInt(form.split("/")[2]) ? parseInt(form.split("/")[2]) : now.getFullYear()
          var year = parseInt(form.split("/")[2])
            ? parseInt(form.split("/")[2])
            : parseInt(form.match(/\d{4}/)[0]);
          if (year < 70) year += 2000;
          else if (year > 69 && year < 100) year += 1900;
          if (form.includes("apr") || form.includes("APR")) {
            var month = 04;
          } else if (form.includes("jun") || form.includes("JUN")) {
            var month = 06;
          } else if (form.includes("sep") || form.includes("SEP")) {
            var month = 09;
          } else if (form.includes("nov") || form.includes("NOV")) {
            var month = 11;
          }
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        }
      } else if (
        inp.match(
          /(january|jan|JANUARY|JAN|march|mar|MARCH|MAR|may|MAY|july|jul|JULY|JUL|august|aug|AUGUST|AUG|october|oct|OCTOBER|OCT|december|dec|DECEMBER|DEC)(\s)(\d+)((\s)(\d{4}|\d{2}))?/
        )
      ) {
        var form = inp.match(
          /(january|jan|JANUARY|JAN|march|mar|MARCH|MAR|may|MAY|july|jul|JULY|JUL|august|aug|AUGUST|AUG|october|oct|OCTOBER|OCT|december|dec|DECEMBER|DEC)(\s)(\d+)((\s)(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/\d+/)[0]);
        if (day < 1 || day > 31) {
          // console.log('Invalid date')

          return resolve(data);
        } else {
          while (form.includes(".") || form.includes("-") || form.includes(" "))
            form = form.replace("-", "/").replace(".", "/").replace(" ", "/");
          // var year = parseInt(form.split("/")[2]) ? parseInt(form.split("/")[2]) : now.getFullYear()
          var year = parseInt(form.split("/")[2])
            ? parseInt(form.split("/")[2])
            : parseInt(form.match(/\d{4}/)[0]);
          if (year < 70) year += 2000;
          else if (year > 69 && year < 100) year += 1900;
          if (form.includes("jan") || form.includes("JAN")) {
            var month = 01;
          } else if (form.includes("mar") || form.includes("MAR")) {
            var month = 03;
          } else if (form.includes("may") || form.includes("MAY")) {
            var month = 05;
          } else if (form.includes("jul") || form.includes("JUL")) {
            var month = 07;
          } else if (form.includes("aug") || form.includes("AUG")) {
            var month = 08;
          } else if (form.includes("oct") || form.includes("OCT")) {
            var month = 10;
          } else if (form.includes("dec") || form.includes("DEC")) {
            var month = 12;
          }
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        }
      } else if (
        inp.match(/(february|feb|FEBRUARY|FEB)(\s)?(\d+)((\s)(\d{4}|\d{2}))?/)
      ) {
        var form = inp.match(
          /(february|feb|FEBRUARY|FEB)(\s)?(\d+)((\s)(\d{4}|\d{2}))?/
        )[0];
        var day = parseInt(form.match(/(\d)+/)[0]);
        var year = parseInt(form.split(" ")[2])
          ? parseInt(form.split(" ")[2])
          : now.getFullYear();
        if (year < 70) year += 2000;
        else if (year > 69 && year < 100) year += 1900;
        if (day > 0 && day < 29) {
          var month = 02;
          // console.log(day+'/'+month+'/'+year)
          let userDateValue = Date.parse(year + "-" + month + "-" + day);
          if (minDateValue <= userDateValue && userDateValue <= maxDateValue) {
            data.validated = true;
            data.data = day + "/" + month + "/" + year;
            return resolve(data);
          } else {
            data.validated = false;
            return resolve(data);
          }
        } else if (day == 29) {
          if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            var month = 02;
            // console.log(day+'/'+month+'/'+year)
            let userDateValue = Date.parse(year + "-" + month + "-" + day);
            if (
              minDateValue <= userDateValue &&
              userDateValue <= maxDateValue
            ) {
              data.validated = true;
              data.data = day + "/" + month + "/" + year;
              return resolve(data);
            } else {
              data.validated = false;
              return resolve(data);
            }
          } else {
            // console.log('Invalid date')

            return resolve(data);
          }
        } else {
          // console.log('Invalid date')

          return resolve(data);
        }
      } else {
        // console.log('Invalid')

        return resolve(data);
      }
    } catch (e) {
      // console.log(e);
      return reject(e);
    }
  });
}