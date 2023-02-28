
  function agregarToggle(selectorItem, selectorContenido, grupoContenidos) {
    const item = document.querySelector(selectorItem);
    const contenido = document.querySelector(selectorContenido);
    const contenidosGrupo = document.querySelectorAll(grupoContenidos);
  
    item.addEventListener("click", () => {
      
      contenidosGrupo.forEach((c) => c.classList.remove("visible"));
  
      
      contenido.classList.add("visible");
    });
  }
  agregarToggle(".item1", ".contenido_1", ".grupo-contenidos");
  agregarToggle(".item2", ".contenido_2", ".grupo-contenidos");
  agregarToggle(".item3", ".contenido_3", ".grupo-contenidos");
  agregarToggle(".item4", ".contenido_4", ".grupo-contenidos");
  agregarToggle(".item5", ".contenido_5", ".grupo-contenidos");


