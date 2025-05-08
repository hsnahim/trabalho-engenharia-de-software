document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const data = {
      user: { id: document.getElementById("userId").value },
      pizza: document.getElementById("pizza").value,
      drink: document.getElementById("drink").value,
      // outros campos necessários
    };
  
    fetch("/api/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => alert("Pedido realizado com sucesso!"))
    .catch(err => alert("Erro ao fazer pedido."));
  });
  