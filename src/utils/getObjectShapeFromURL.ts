'use strict';

import URLFetcher from "./URLFetcher.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

let THREE: { OBJLoader: typeof OBJLoader } | undefined;

/**
 * Updates the shape point based on the given coordinates and shape array.
 * @param {number} e - The x-coordinate.
 * @param {number} t - The y-coordinate.
 * @param {number[]} i - The shape array to update.
 */
const shapePoint = function (e: number, t: number, i: number[]): void {
    let s: number, o: number, l: number;
    l = i.length;
    s = Math.atan2(t, -e);
    s = Math.round((s + 2 * Math.PI) / (2 * Math.PI) * l) % l;
    o = Math.sqrt(e * e + t * t);
    i[s] = Math.max(i[s], o);
};

/**
 * Extracts the shape from a 3D object.
 * @param {any} obj - The 3D object.
 * @param {number} [e=50] - The resolution of the shape.
 * @returns {number[]} The shape array.
 */
const getShape = function (obj: any, e: number = 50): number[] {
    obj = obj.geometry;
    let vertices = Array.from(obj.attributes.position.array);
    obj.vertices = [];
    while (vertices.length > 0) {
        obj.vertices.push({
            x: vertices[0],
            y: vertices[1],
            z: vertices[2]
        });
        vertices.splice(0, 3);
    }
    let faces = obj.index == null ? [...Array(obj.vertices.length)].map((_, i) => i) : Array.from(obj.index.array);
    obj.faces = [];
    while (faces.length > 0) {
        obj.faces.push({
            a: faces[0],
            b: faces[1],
            c: faces[2]
        });
        faces.splice(0, 3);
    }
    const u: number[] = Array(e).fill(0);
    for (const i of obj.faces) {
        const f = obj.vertices[i.a];
        const g = obj.vertices[i.b];
        const m = obj.vertices[i.c];
        for (let s = 0; s <= 99; s++) {
            const t = s / 100;
            let y = f.x * t + g.x * (1 - t);
            let x = f.y * t + g.y * (1 - t);
            shapePoint(y, x, u);
            y = m.x * t + g.x * (1 - t);
            x = m.y * t + g.y * (1 - t);
            shapePoint(y, x, u);
            y = m.x * t + f.x * (1 - t);
            x = m.y * t + f.y * (1 - t);
            shapePoint(y, x, u);
        }
    }
    return u.map(i => parseFloat(i.toFixed(3)));
};

/**
 * Fetches a 3D object from a URL and extracts its shape.
 * @param {string} url - The URL of the 3D object.
 * @returns {Promise<number[]>} The shape array of the 3D object.
 * @throws Will throw an error if the 3D object is invalid.
 */
const getObjectShapeFromURL = async function (url: string): Promise<number[]> {
    if (!THREE) THREE = { OBJLoader: (await import("three/addons/loaders/OBJLoader.js")).OBJLoader };
    try {
        const loader = new THREE.OBJLoader();
        const object = loader.parse(await URLFetcher(url));
        return getShape(object.children[0]);
    } catch (e) {
        throw new Error("Invalid 3D Object");
    }
};

export default getObjectShapeFromURL;