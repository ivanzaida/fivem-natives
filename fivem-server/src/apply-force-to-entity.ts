import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:APPLY_FORCE_TO_ENTITY
 *
 * 0xC1C0855A

 * Documented here:
 * gtaforums.com/topic/885669-precisely-define-object-physics/
 * gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 * forceFlags:
 * First bit (lowest): Strong force flag, factor 100
 * Second bit: Unkown flag
 * Third bit: Momentum flag=1 (vector (x,y,z) is a momentum, more research needed)
 * If higher bits are unequal 0 the function doesn't applay any forces at all.
 * (As integer possible values are 0-7)
 * 0: weak force
 * 1: strong force
 * 2: same as 0 (2nd bit?)
 * 3: same as 1
 * 4: weak momentum
 * 5: strong momentum
 * 6: same as 4
 * 7: same as 5
 * isLocal: vector defined in local (body-fixed) coordinate frame
 * isMassRel: if true the force gets multiplied with the objects mass (this is why it was known as highForce) and different objects will have the same acceleration.
 * p8 !!! Whenever I set this !=0, my script stopped.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity you want to apply a force on
 * @param {number} forceType See native description above for a list of commonly used values
 * @param {number} x Force amount (X)
 * @param {number} y Force amount (Y)
 * @param {number} z Force amount (Z)
 * @param {number} offX Rotation/offset force (X)
 * @param {number} offY Rotation/offset force (Y)
 * @param {number} offZ Rotation/offset force (Z)
 * @param {number} boneIndex (Often 0) Entity bone index
 * @param {boolean} isDirectionRel (Usually false) Vector defined in local (bodyfixed) coordinate frame
 * @param {boolean} ignoreUpVec (Usually true)
 * @param {boolean} isForceRel (Usually true) When true, force gets multiplied with the objects mass and different objects will have the same acceleration
 * @param {boolean} p12 (Usually false)
 * @param {boolean} p13 (Usually true)
 */
export function applyForceToEntity(entity: EntityIndex, forceType: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean, p12: boolean, p13: boolean): void {
	const applyForceToEntity_result = Citizen.invokeNative<void>('0xC1C0855A', entity, forceType, x, y, z, offX, offY, offZ, boneIndex, isDirectionRel, ignoreUpVec, isForceRel, p12, p13);
	return applyForceToEntity_result;
}