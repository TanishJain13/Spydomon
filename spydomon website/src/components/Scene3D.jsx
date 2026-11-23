import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scene3D({ isDropping = false, onDropComplete, onDismiss }) {
  const mountRef = useRef(null);
  const stateRef = useRef({
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    isDropping: false,
    dropProgress: 0,
    dropVelocity: 0,
    swingAngle: 0,
  });

  const [interactiveTip, setInteractiveTip] = useState(true);

  // Sync isDropping prop
  useEffect(() => {
    stateRef.current.isDropping = isDropping;
    if (isDropping) {
      stateRef.current.dropVelocity = 0.08;
    }
  }, [isDropping]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070B, 0.0028);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xe62429, 4, 35);
    redLight.position.set(-6, 4, 8);
    scene.add(redLight);

    const cyanLight = new THREE.PointLight(0x00d2ff, 3, 30);
    cyanLight.position.set(6, -4, 6);
    scene.add(cyanLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontLight.position.set(0, 10, 12);
    scene.add(frontLight);

    // --- 3D Procedural Web Background Lattice ---
    const webGroup = new THREE.Group();
    scene.add(webGroup);

    const webRadials = 16;
    const webRings = 9;
    const webRadiusMax = 14;

    const webPoints = [];
    const webIndices = [];

    // Build concentric web node grid
    for (let r = 0; r <= webRings; r++) {
      const radius = (r / webRings) * webRadiusMax;
      for (let s = 0; s < webRadials; s++) {
        const theta = (s / webRadials) * Math.PI * 2;
        // Introduce slight organic sag on Z
        const z = -4 - Math.sin((r / webRings) * Math.PI) * 1.5;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius + 1;
        webPoints.push(x, y, z);
      }
    }

    // Connect rings and radials
    for (let r = 0; r < webRings; r++) {
      for (let s = 0; s < webRadials; s++) {
        const current = r * webRadials + s;
        const nextInRing = r * webRadials + ((s + 1) % webRadials);
        const nextInSpoke = (r + 1) * webRadials + s;

        webIndices.push(current, nextInRing);
        webIndices.push(current, nextInSpoke);
      }
    }

    const webGeometry = new THREE.BufferGeometry();
    webGeometry.setAttribute('position', new THREE.Float32BufferAttribute(webPoints, 3));
    webGeometry.setIndex(webIndices);

    const webMaterial = new THREE.LineBasicMaterial({
      color: 0x3b4457,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const webMesh = new THREE.LineSegments(webGeometry, webMaterial);
    webGroup.add(webMesh);

    // --- 3D Floating Particle Dust ---
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 30;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
      particleScales[i] = Math.random() * 0.8 + 0.2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- 3D Main Mascot & Web Pendulum Rig ---
    const mascotRig = new THREE.Group();
    scene.add(mascotRig);

    // Web Anchor Line (Tensile White Strand)
    const lineCurve = new THREE.LineCurve3(
      new THREE.Vector3(0, 8.5, 0),
      new THREE.Vector3(0, 2.5, 0)
    );
    const lineGeo = new THREE.TubeGeometry(lineCurve, 20, 0.025, 8, false);
    const lineMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    mascotRig.add(lineMesh);

    // Spider-Man Character Plane
    const textureLoader = new THREE.TextureLoader();
    const spiderTexture = textureLoader.load(
      '/Tobey-Maguire-Spider-Man-Classic-Pose-PNG.png',
      () => {
        renderer.render(scene, camera);
      }
    );
    spiderTexture.generateMipmaps = true;
    spiderTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // Proportional dimensions: 412 x 742 -> aspect = 1.801
    const charWidth = 3.6;
    const charHeight = charWidth * 1.801;
    const charGeo = new THREE.PlaneGeometry(charWidth, charHeight);
    const charMat = new THREE.MeshStandardMaterial({
      map: spiderTexture,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const charMesh = new THREE.Mesh(charGeo, charMat);
    // Position character so his feet connect directly to lineMesh end (y=2.5)
    charMesh.position.set(0, 2.5 - charHeight / 2, 0.05);
    mascotRig.add(charMesh);

    // 3D Glass Accent Plaque (Desktop Window Simulation Behind Him)
    const cardWidth = 6.2;
    const cardHeight = 7.5;
    const cardGeo = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const cardMat = new THREE.MeshPhysicalMaterial({
      color: 0x090d15,
      transparent: true,
      opacity: 0.75,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
    });
    const cardMesh = new THREE.Mesh(cardGeo, cardMat);
    cardMesh.position.set(0, -0.6, -0.3);
    mascotRig.add(cardMesh);

    // Card border lines
    const cardEdges = new THREE.EdgesGeometry(cardGeo);
    const cardEdgeMat = new THREE.LineBasicMaterial({
      color: 0xe62429,
      transparent: true,
      opacity: 0.45,
    });
    const cardWire = new THREE.LineSegments(cardEdges, cardEdgeMat);
    cardWire.position.copy(cardMesh.position);
    mascotRig.add(cardWire);

    // Initial position of mascot rig (resting above or in frame)
    mascotRig.position.set(0, 0, 0);

    // --- Mouse Move Handler ---
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouse.targetX = x;
      stateRef.current.mouse.targetY = y;
    };

    container.addEventListener('pointermove', handlePointerMove);

    // --- Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse interpolation (Damped Lerp)
      stateRef.current.mouse.x +=
        (stateRef.current.mouse.targetX - stateRef.current.mouse.x) * 0.06;
      stateRef.current.mouse.y +=
        (stateRef.current.mouse.targetY - stateRef.current.mouse.y) * 0.06;

      const mx = stateRef.current.mouse.x;
      const my = stateRef.current.mouse.y;

      // 3D Parallax Tilt on the Mascot Rig
      mascotRig.rotation.y = mx * 0.25;
      mascotRig.rotation.x = -my * 0.18;
      mascotRig.rotation.z = Math.sin(time * 1.5) * 0.02 + mx * 0.05;

      // Subtle breathing float
      mascotRig.position.x = mx * 0.4;
      mascotRig.position.z = Math.sin(time * 2) * 0.15;

      // Drop physics animation
      if (stateRef.current.isDropping) {
        // Damped harmonic descent
        if (stateRef.current.dropProgress < 1) {
          stateRef.current.dropProgress += stateRef.current.dropVelocity;
          stateRef.current.dropVelocity *= 0.94; // friction
          if (stateRef.current.dropProgress >= 1) {
            stateRef.current.dropProgress = 1;
            if (onDropComplete) onDropComplete();
          }
        }
        // Swing amplitude during drop
        const bounce = Math.sin(stateRef.current.dropProgress * Math.PI) * 0.4;
        mascotRig.position.y = (1 - stateRef.current.dropProgress) * 6 - bounce;
      } else {
        // Idle gentle oscillation
        mascotRig.position.y = Math.sin(time * 1.8) * 0.12;
        stateRef.current.dropProgress = 0;
      }

      // Web subtle oscillation
      webGroup.rotation.z = time * 0.02;
      webGroup.position.x = mx * 0.5;
      webGroup.position.y = my * 0.3;

      // Dynamic light tracking
      redLight.position.x = -6 + mx * 4;
      redLight.position.y = 4 + my * 3;
      cyanLight.position.x = 6 - mx * 3;
      cyanLight.position.y = -4 - my * 2;

      // Drift particles gently
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i) * 0.003;
        positions[i * 3] += Math.cos(time + i) * 0.002;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Observer ---
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointermove', handlePointerMove);
      resizeObserver.disconnect();

      webGeometry.dispose();
      webMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      charGeo.dispose();
      charMat.dispose();
      cardGeo.dispose();
      cardMat.dispose();
      cardEdges.dispose();
      cardEdgeMat.dispose();
      spiderTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] select-none">
      {/* 3D WebGL Canvas Target */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Viewport — Move your mouse to explore spatial depth"
      />

      {/* Floating Spatial Depth Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05070B]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
        WebGL 3D Spatial Canvas • Move Cursor
      </div>

      {/* 3D Coordinate Telemetry */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-3 text-[10px] font-mono text-slate-500">
        <span>X-Y Track: Damped</span>
        <span>Z-Depth: 18.00</span>
        <span className="text-[#E62429]">FPS: 60 (HW Accel)</span>
      </div>

      {/* Quick Interactive Prompt */}
      {interactiveTip && (
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={() => setInteractiveTip(false)}
            className="text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/5 border border-white/10 backdrop-blur-sm transition-colors"
          >
            Drag to Tilt ✕
          </button>
        </div>
      )}
    </div>
  );
}
