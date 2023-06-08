# SOKOBAN

## Application mobile en React Native

**Lien GitHub :**

[https://github.com/PaulGub/sokoban-reactNative](https://github.com/PaulGub/sokoban-reactNative)

**Justification de la technologie :**

L'usage de React Native pour l'application mobile Sokoban était une exigence du projet. Cette technologie nous permet de construire une application mobile avec JavaScript, tout en offrant des performances proches de celles d'une application native.

**Justification des dépendances :**

- `expo`: Il nous permet d'exécuter du code JavaScript sur notre téléphone sans avoir à passer par une phase de build avec Xcode ou Android Studio.
- `react-navigation`: Pour le routage entre les différents écrans de notre application mobile.
- `axios`: Pour faire des requêtes HTTP à notre API.
- `expo-av` et `react-native-sound`: Pour la gestion du son dans l'application.
- `expo-linear-gradient` et `react-native-linear-gradient`: Pour créer des dégradés linéaires dans notre interface utilisateur.
- `react-native-confetti`: pour afficher une animation de confetti lorsqu’on réussit un niveau
- `async-storage`: stockage de donnée “clé-valeur” asynchrone non chiffré

**Difficultés rencontrées :**

- **Animation du personnage:** nous avons eu du mal à faire en sorte qu’une séquence d’images s’affichent lorsqu’on choisit une direction de déplacement pour le personnage. Nous affichons donc juste une image du personnage correspondant à la direction cliqué et non une animation
- **Gestion des déplacements :** La gestion des déplacements du personnage a été une partie assez complexe, notamment pour faire en sorte d'afficher de nouveau le point de destination une fois que le personnage soit passé dessus. Pour résoudre ce problème, quand le personnage se déplace sur une case autorisée, nous stockons dans une variable dynamique la valeur de cette case pour l’afficher de nouveau une fois qu’il l’aura quitté.
- **Effet sonore :** Problème de dépendance, nous avons voulu utiliser des dépendances réserve à React Native ne fonctionnant pas avec Expo.

![Sokoban](https://github.com/PaulGub/sokoban-reactNative/blob/main/Expo_Go.gif)

**Autres Liens :**

L'API (Node.js) : [https://gitlab.com/theojamard/sokoban-admin](https://gitlab.com/theojamard/sokoban-admin)

Créateur de niveau (Vue.js) : [https://gitlab.com/theojamard/sokoban-admin](https://gitlab.com/theojamard/sokoban-admin)