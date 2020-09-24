
setTimeout(function () {
  $.datetimepicker.setLocale('ch');
  $('.date-input input').datetimepicker({
    timepicker:false,
    format:'Y-m-d'
  })
}, 500)

var isExpand = false
function enlarge () {
  console.log('sdsd')
  isExpand = !isExpand
  if (isExpand) {
    document.querySelector('.klj-show').classList.add('expand')
    document.querySelector('.klj-show .enlarge span').innerText = '缩小'
  } else {
    document.querySelector('.klj-show').classList.remove('expand')
    document.querySelector('.klj-show .enlarge span').innerText = '放大'
  }
  
}


function changeAcitveTable(ind) {
  var list = document.querySelectorAll('.switch-button span')
  for (var index = 0; index < list.length; index++) {
    var element = list[index];
    element.classList.remove('active')
  }
  if (ind == 0) {
    document.querySelectorAll('.klj-show .switch-button span')[0].classList.add('active')
    document.querySelector('.klj-show .table-1').style.display = 'block'
    document.querySelector('.klj-show .table-2').style.display = 'none'
  } else {
    document.querySelectorAll('.klj-show .switch-button span')[1].classList.add('active')
    document.querySelector('.klj-show .table-2').style.display = 'block'
    document.querySelector('.klj-show .table-1').style.display = 'none'
  }
}