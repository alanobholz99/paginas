export let dBusuarios = [
    {
      id: 1,
      user: "alan",
      pass: "3030",
      admin: true,
    },
  ];

 
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));
