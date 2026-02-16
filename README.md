# Projecte Node + Vue

## Arquitectura del projecte

Aquest projecte està compost per dues parts principals:

1. **Backend (Node.js + Express)**  
   - Gestiona la lògica de l’aplicació i proveeix una API REST.  
   - Emmagatzema les dades en fitxers `pokemon.json` i `user.json`.  
   - Gestiona sessions amb **JWT emmagatzemats en cookies httpOnly**, assegurant una autenticació segura.

2. **Frontend (Vue.js)**  
   - És una SPA que consumeix l’API del backend.  
   - Mostra llistats de Pokemons i videojocs, formularis de registre i login, i pàgines protegides.  
   - Les rutes protegides comproven la sessió de l’usuari fent peticions al backend per validar el JWT.

---

## Endpoints del backend

| Endpoint         | Mètode | Descripció |
|-----------------|--------|------------|
| `/login`        | POST   | Autentica un usuari i genera un JWT guardat en cookie httpOnly amb expiració d’1 hora. |
| `/register`     | POST   | Registra un usuari nou i el desa a `user.json`. |
| `/logout`       | POST   | Esborra la cookie JWT i finalitza la sessió. |
| `/protected`    | GET    | Endpoint protegit que retorna JSON amb `{ authenticated: true, user }` si la sessió és vàlida. |
| `/pokemons`     | GET    | Retorna el llistat de Pokemons. |
| `/pokemons/:id` | DELETE | Elimina un Pokemon pel seu ID. |
| `/videogames`   | GET    | Retorna el llistat de videojocs. |
| `/videogames/:id` | DELETE | Elimina un videojoc pel seu ID. |

---

## Flux d’autenticació

1. **Registre**  
   L’usuari envia el formulari de registre a `/register`. El backend crea un nou usuari i el desa al fitxer `user.json`.

2. **Login**  
   L’usuari envia el formulari de login a `/login` amb el seu nom d’usuari i contrasenya.  
   - Si les credencials són correctes, el backend genera un JWT i l’envia en cookie httpOnly amb durada d’una hora.  
   - Si són incorrectes, el backend retorna un error 401.

3. **Accés a rutes protegides**  
   Quan l’usuari intenta accedir a una ruta protegida, el frontend crida `/protected` amb la cookie inclosa (`credentials: include`).  
   - Si el JWT és vàlid, el backend retorna `{ authenticated: true, user }`.  
   - Si no és vàlid, retorna `{ authenticated: false }` o un error 401.  
   El frontend només permet accedir a la ruta si `authenticated = true`.

4. **Logout**  
   Quan l’usuari fa logout, es crida `/logout`. El backend esborra la cookie JWT i el frontend redirigeix l’usuari a la pàgina de login.
