function n(x){ return isNaN(x) ? 0 : x; }

function calculateBill(){
  const totalReading = n(parseFloat(document.getElementById('totalReading').value));
  const totalBill = n(parseFloat(document.getElementById('totalBill').value));
  const person2Reading = n(parseFloat(document.getElementById('person2Reading').value));
  const motor1 = n(parseFloat(document.getElementById('motor1').value));
  const motor2 = n(parseFloat(document.getElementById('motor2').value));

  if (totalReading <= 0 || totalBill <= 0) {
    alert('कृपया कुल रीडिंग और कुल बिल राशि सही दर्ज करें।');
    return;
  }

  const costPerUnit = totalBill / totalReading;

  const person2Units = person2Reading + motor2;
  let person1Meter = totalReading - person2Units;
  if (person1Meter < 0) person1Meter = 0;

  const person1Units = person1Meter;

  let person1Cost = Math.round(person1Units * costPerUnit);
  let person2Cost = Math.round(person2Units * costPerUnit);

  const roundedTotal = Math.round(totalBill);
  const diff = roundedTotal - (person1Cost + person2Cost);
  person1Cost += diff; // fix rounding error

  document.getElementById('result').innerHTML = `
    <div class="card">
      <h2>कुल</h2>
      <p><b>कुल यूनिट:</b> ${totalReading}</p>
      <p><b>कुल राशि:</b> ₹${roundedTotal}</p>
      <p><b>प्रति यूनिट लागत:</b> ₹${costPerUnit.toFixed(2)}</p>
    </div>

    <div class="card" style="border-left: 6px solid #1e90ff">
      <h2>व्यक्ति 1</h2>
      <p><b>मीटर यूनिट:</b> ${person1Meter-motor1}</p>
      <p><b>मोटर यूनिट:</b> ${motor1}</p>
      <p><b>कुल बिल्ड यूनिट:</b> ${person1Units}</p>
      <p><b>कुल लागत:</b> ₹${person1Cost}</p>
    </div>

    <div class="card" style="border-left: 6px solid #28a745">
      <h2>व्यक्ति 2</h2>
      <p><b>मीटर यूनिट:</b> ${person2Reading}</p>
      <p><b>मोटर यूनिट:</b> ${motor2}</p>
      <p><b>कुल बिल्ड यूनिट:</b> ${person2Units}</p>
      <p><b>कुल लागत:</b> ₹${person2Cost}</p>
    </div>
  `;
}
