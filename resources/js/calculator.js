  function calculate() {
    var totalInput = Number(document.getElementById('total-input').value);
    console.log(totalInput);
    var tipPer = Number(document.getElementById('tipPer').value);
    console.log(tipPer);

    var tip = totalInput * tipPer;
    tip = Math.round(tip * 100) / 100;
    console.log(tip);

    var totalWithTip = Number(totalInput + tip);
    totalWithTip = Math.round(totalWithTip * 100) / 100;

    document.getElementById('tip-calculated').style.display = 'block';
    document.getElementById('tip').innerHTML = tip.toFixed(2);
    document.getElementById('tipWithTotalCalculated').style.display = 'block';
    document.getElementById('total').innerHTML = totalWithTip.toFixed(2);

}

document.getElementById('total-input').value = '';
document.getElementById('tip-calculated').style.display = 'none';
document.getElementById('tipWithTotalCalculated').style.display = 'none';

document.getElementById('tipPer').onclick = function() {
  calculate();
}
