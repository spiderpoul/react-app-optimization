import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import starsTexture from "../../img/Atmosferas/stars.jpg";
import sunTexture from "../../img/2k_sun.jpg";
import mercuryTexture from "../../img/2k_mercury.jpg";
import venusTexture from "../../img/2k_venus_surface.jpg";
import earthTexture from "../../img/2k_earth_daymap.jpg";
import marsTexture from "../../img/2k_mars.jpg";
import jupiterTexture from "../../img/2k_jupiter.jpg";
import saturnTexture from "../../img/2k_saturn.jpg";
import uranusTexture from "../../img/2k_uranus.jpg";
import neptuneTexture from "../../img/2k_neptune.jpg";

import saturnRingTexture from "../../img/Atmosferas/saturn_ring.png";

export const showSolarSystem = (id) => {
  // Velocidade inicial dos planetas (normal)
  let speed = 1;

  //Renderizador
  const renderer = new THREE.WebGLRenderer();
  const rect = document.getElementById(id).getBoundingClientRect();
  const height = rect.height || 1000;
  renderer.setSize(rect.width, height);

  document.getElementById(id).appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  // Criando a instância da câmera

  const camera = new THREE.PerspectiveCamera(
    45,
    rect.width / height,
    0.1,
    2000
  );

  // Colocando o Background do Sistema Solar

  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load([
    starsTexture?.src || starsTexture,
    starsTexture?.src || starsTexture,
    starsTexture?.src || starsTexture,
    starsTexture?.src || starsTexture,
    starsTexture?.src || starsTexture,
    starsTexture?.src || starsTexture,
  ]);

  // Colocando o Controle da órbita

  const orbit = new OrbitControls(camera, renderer.domElement);
  camera.position.set(-90, 140, 140);

  // controle do estado da câmera
  orbit.saveState(); // salva o estado inicial
  window.addEventListener("keydown", function (e) {
    if (e.key === "r") orbit.reset(); // reseta para o estado inicial
    // Ajusta a velocidade com base nas teclas '+' e '-'
    if ((e.shiftKey && e.code === "Equal") || e.code === "NumpadAdd") {
      // Tecla '+'
      speed *= 1.2;
    } else if (e.key === "-") {
      // Tecla '-'
      speed /= 1.2;
    } else if (e.key === "0")
      // restaura a velocidade para o valor padrão
      speed = 1;
  });
  orbit.enableDamping = true; // "peso" para o movimento da câmera

  orbit.update();

  // Inicializando a luz no sistema
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  // Inicializando os planetas
  const textureLoad = new THREE.TextureLoader();

  // Adicionando o Sol
  const sunGeo = new THREE.SphereGeometry(40, 20);
  const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoad.load(sunTexture?.src || sunTexture),
  });

  const sun = new THREE.Mesh(sunGeo, sunMat);
  scene.add(sun);

  // Adicionando uma luz direcional
  const light = new THREE.PointLight(0xff0000, 1, 1000);
  light.position.set(0, 0, 0);
  scene.add(light);

  // Função para inicializar outros planetas
  function createPlanet(size, texture, position, ring) {
    const geometry = new THREE.SphereGeometry(size, 25, 20);
    const material = new THREE.MeshStandardMaterial({
      map: textureLoad.load(texture),
    });
    const planet = new THREE.Mesh(geometry, material);
    const planetObj = new THREE.Object3D();
    planetObj.add(planet);
    scene.add(planetObj);
    planet.position.x = position;

    if (ring) {
      const RingGeo = new THREE.RingGeometry(
        ring.innerRadius,
        ring.outerRadius,
        30
      );
      const RingMat = new THREE.MeshStandardMaterial({
        map: textureLoad.load(ring.texture),
        side: THREE.DoubleSide,
      });
      const Ring = new THREE.Mesh(RingGeo, RingMat);
      planetObj.add(Ring);

      Ring.position.x = position;
      Ring.rotation.x = -0.5 * Math.PI;
    }
    return { planet, planetObj };
  }

  // Tamanho dos planetas em escala com a Terra

  // Mercúrio
  const mercury = createPlanet(3, mercuryTexture?.src || mercuryTexture, 70);

  // Vênus
  const venus = createPlanet(4.6, venusTexture?.src || venusTexture, 120);

  // Terra
  const earth = createPlanet(6, earthTexture?.src || earthTexture, 220);

  // Marte
  const mars = createPlanet(7.8, marsTexture?.src || marsTexture, 300);

  // Júpiter
  const jupiter = createPlanet(20, jupiterTexture?.src || jupiterTexture, 410);

  // Saturno (contém anéis)
  const saturn = createPlanet(15, saturnTexture?.src || saturnTexture, 500, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture?.src || saturnRingTexture,
  });

  // Urano
  const uranus = createPlanet(12, uranusTexture?.src || uranusTexture, 700);

  // Netuno
  const neptune = createPlanet(10, neptuneTexture?.src || neptuneTexture, 800);

  // Elemento para mostrar a velocidade
  const speedInfo = document.createElement("div");
  speedInfo.style.position = "absolute";
  speedInfo.style.bottom = "20px";
  speedInfo.style.right = "20px";
  speedInfo.style.color = "white";
  document.body.appendChild(speedInfo);

  // Função de animação
  function animate() {
    sun.rotateY(0.002);

    mercury.planet.rotateY(0.174616 * speed);
    mercury.planetObj.rotateY(0.0203 * speed);

    venus.planet.rotateY(0.048611 * speed);
    venus.planetObj.rotateY(0.008 * speed);

    earth.planet.rotateY(0.007272 * speed);
    earth.planetObj.rotateY(0.0049 * speed);

    mars.planet.rotateY(0.004107 * speed);
    mars.planetObj.rotateY(0.0026 * speed);

    jupiter.planet.rotateY(0.000434 * speed);
    jupiter.planetObj.rotateY(0.0004 * speed);

    saturn.planet.rotateY(0.000465 * speed);
    saturn.planetObj.rotateY(0.0002 * speed);

    uranus.planet.rotateY(0.000648 * speed);
    uranus.planetObj.rotateY(0.0001 * speed);

    neptune.planet.rotateY(0.000538 * speed);
    neptune.planetObj.rotateY(0.0001 * speed);

    // Info para controle de velocidade do movimento dos planetas
    speedInfo.innerText = `Tecla ( + ): aumenta a velocidade de movimento dos planetas \n 
  Tecla ( - ): diminui a velocidade de movimento dos planetas \n`;

    renderer.render(scene, camera);
  }

  // Configura a função de animação para ser chamada a cada quadro
  renderer.setAnimationLoop(animate);

  // Atualiza o tamanho da janela ao redimensionar
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    const rectEl = document.getElementById(id).getBoundingClientRect();
    camera.updateProjectionMatrix();
    renderer.setSize(rectEl.width, rectEl.height || 1000);
  });
};

window.showSolarSystem = showSolarSystem
