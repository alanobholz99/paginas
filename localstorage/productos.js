export const productos = [
    {
      id: 1,
      nombre: "Creatina",
      precio: 150,
      imagen:"https://www.mercadolibre.com.ar/suplemento-en-polvo-star-nutrition-creatina-100-pura-en-pote-de-300g/p/MLA13283558?from=gshop&matt_tool=79377915&matt_word=&matt_source=google&matt_campaign_id=14242903091&matt_ad_group_id=146686700282&matt_match_type=&matt_network=g&matt_device=c&matt_creative=645552803022&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735114561&matt_product_id=MLA13283558-product&matt_product_partition_id=1937880317920&matt_target_id=aud-1925157273260:pla-1937880317920&gclid=Cj0KCQjw_5unBhCMARIsACZyzS3ZzIu88m12ZOH127iN2t0z4c4LwZ0kQpG1HOHGJXcvSgPkFFFKLjMaAi3pEALw_wcB",
      categoria:"creatina"
    },
    {
      id: 2,
      nombre: "suplemento crecimiento muscular",
      precio: 100,
      imagen:"imagenes/suplemento crecimiento muscular.edit.jpg",
      categoria:"suplemento crecimiento muscular"
    },
    {
      id: 3,
      nombre: "whey protein",
      precio: 50,
      imagen:"imagenes/whey protein.webp",
      categoria:"whey protein"
    },
    {
      id: 4,
      nombre: "whey cutter",
      precio: 50,
      imagen:"imagenes/Whey-cutter SPX.webp",
      categoria:"whey cutter"
    },
   
  ];
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
  