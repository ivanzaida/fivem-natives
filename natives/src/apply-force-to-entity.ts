import { EntityIndex, EApplyForceType } from '@ivanzaida/structures'

/**
 * ENTITY:APPLY_FORCE_TO_ENTITY
 *
 * 0xE592D924D5438108

 * 
 * Documented here:
 * gtaforums.com/topic/885669-precisely-define-object-physics/
 * gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 * 
 * forceFlags:
 * First bit (lowest): Strong force flag, factor 100
 * Second bit: Unkown flag
 * Third bit: Momentum flag=1 (vector (x,y,z) is a momentum, more research needed)
 * If higher bits are unequal 0 the function doesn't applay any forces at all.
 * (As integer possible values are 0-7)
 * 
 * 0: weak force
 * 1: strong force
 * 2: same as 0 (2nd bit?)
 * 3: same as 1
 * 4: weak momentum
 * 5: strong momentum
 * 6: same as 4
 * 7: same as 5
 * 
 * isLocal: vector defined in local (body-fixed) coordinate frame
 * isMassRel: if true the force gets multiplied with the objects mass (this is why it was known as highForce) and different objects will have the same acceleration.
 * 
 * p8 !!! Whenever I set this !=0, my script stopped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EApplyForceType} applyType
 * @param {number} forceX
 * @param {number} forceY
 * @param {number} forceZ
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} component
 * @param {boolean} localForce
 * @param {boolean} localOffset
 * @param {boolean} scaleByMass
 * @param {boolean} triggerAudio
 * @param {boolean} scaleByTimeWarp
 */
export function applyForceToEntity(entity: EntityIndex, applyType: EApplyForceType | number, forceX: number, forceY: number, forceZ: number, offsetX: number, offsetY: number, offsetZ: number, component: number, localForce: boolean, localOffset: boolean, scaleByMass: boolean, triggerAudio: boolean = false, scaleByTimeWarp: boolean = true): void {
	const applyForceToEntity_result = Citizen.invokeNative<void>('0xE592D924D5438108', entity, applyType, forceX, forceY, forceZ, offsetX, offsetY, offsetZ, component, localForce, localOffset, scaleByMass, triggerAudio, scaleByTimeWarp);
	return applyForceToEntity_result;
}