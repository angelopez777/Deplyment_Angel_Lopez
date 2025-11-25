document.getElementById("calcForm").addEventListener("submit", function(e){
  e.preventDefault();

  const edad = parseInt(document.getElementById("edad").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const sexo = document.getElementById("sexo").value;
  const actividad = parseFloat(document.getElementById("actividad").value);

  // Fórmula TMB Harris-Benedict
  let tmb = 0;
  if(sexo === "h"){
    tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * edad);
  } else {
    tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * edad);
  }

  const caloriasDiarias = tmb * actividad;

  // Macronutrientes recomendados
  const proteinas = (caloriasDiarias * 0.30) / 4;
  const carbohidratos = (caloriasDiarias * 0.50) / 4;
  const grasas = (caloriasDiarias * 0.20) / 9;

  document.getElementById("resultado").innerHTML = `
    <h3>Resultados:</h3>
    <p><strong>TMB:</strong> ${tmb.toFixed(2)} kcal</p>
    <p><strong>Calorías diarias recomendadas:</strong> ${caloriasDiarias.toFixed(2)} kcal</p>
    
    <h3>Macronutrientes sugeridos:</h3>
    <p><strong>Proteínas:</strong> ${proteinas.toFixed(1)} g</p>
    <p><strong>Carbohidratos:</strong> ${carbohidratos.toFixed(1)} g</p>
    <p><strong>Grasas:</strong> ${grasas.toFixed(1)} g</p>
  `;
});
