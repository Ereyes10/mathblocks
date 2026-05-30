// ============================================
// SISTEMA DE ACTIVIDADES PARA PROBAR (ESCALABLE)
// ============================================

import { ACTIVIDADES_T1 } from "./probar/actividadesProbar_T1.js";
import { ACTIVIDADES_T2 } from "./probar/actividadesProbar_T2.js";
import { ACTIVIDADES_T3 } from "./probar/actividadesProbar_T3.js";   
import { ACTIVIDADES_T4 } from "./probar/actividadesProbar_T4.js";
import { ACTIVIDADES_T5 } from "./probar/actividadesProbar_T5.js";
import { ACTIVIDADES_T6 } from "./probar/actividadesProbar_T6.js";
// Cuando crees el tema 2 agregas:
//import { ACTIVIDADES_T2 } from "./Probar/actividadesProbar_T2.js";



export const ACTIVIDADES_PROBAR = {
  ...ACTIVIDADES_T1,
  ...ACTIVIDADES_T2,
  ...ACTIVIDADES_T3,
  ...ACTIVIDADES_T4,
  ...ACTIVIDADES_T5,
  ...ACTIVIDADES_T6
};



