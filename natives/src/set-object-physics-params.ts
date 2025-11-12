import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_PHYSICS_PARAMS
 *
 * 0x2493F314750274C9

 * 
 * Any param set to -1.0 will be ignored, and will remain as defaults.
 * Specifying mass = -1.0 will reset the mass back to the object's default value
 * 
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 * 
 * Other parameters seem to be unknown.
 * 
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 * @param {number} mass
 * @param {number} gravityFactor
 * @param {number} translationalDampingX
 * @param {number} translationalDampingY
 * @param {number} translationalDampingZ
 * @param {number} rotationalDampingX
 * @param {number} rotationalDampingY
 * @param {number} rotationalDampingZ
 * @param {number} collisionMargin
 * @param {number} maxAngularSpeed
 * @param {number} buoyancyFactor Allow scaling of an object's buoyancy in water.
 */
export function setObjectPhysicsParams(object: ObjectIndex, mass: number, gravityFactor: number, translationalDampingX: number, translationalDampingY: number, translationalDampingZ: number, rotationalDampingX: number, rotationalDampingY: number, rotationalDampingZ: number, collisionMargin: number = 1, maxAngularSpeed: number = 1, buoyancyFactor: number = 1): void {
	const setObjectPhysicsParams_result = Citizen.invokeNative<void>('0x2493F314750274C9', object, mass, gravityFactor, translationalDampingX, translationalDampingY, translationalDampingZ, rotationalDampingX, rotationalDampingY, rotationalDampingZ, collisionMargin, maxAngularSpeed, buoyancyFactor);
	return setObjectPhysicsParams_result;
}