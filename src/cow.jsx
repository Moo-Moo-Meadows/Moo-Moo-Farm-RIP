/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const CowModel = (props) => {
  const { nodes, materials } = useGLTF("/Cow.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.619}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.cow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.eye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.nose}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.weapon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.pink}
        />
      </group>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.平面.geometry}
        material={materials["マテリアル.002"]}
        scale={6.088}
      /> */}
    </group>
  );
}

useGLTF.preload("/Cow.glb");
