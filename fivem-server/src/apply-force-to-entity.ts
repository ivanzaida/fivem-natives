import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:APPLY_FORCE_TO_ENTITY
 *
 * 0xC1C0855A

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
 * @param {EntityIndex} entity The entity handle
 * @param {number} forceType The force type
 * @param {number} x The x component of the force to apply
 * @param {number} y The y component of the force to apply
 * @param {number} z The z component of the force to apply
 * @param {number} offX Offset from center of entity (X)
 * @param {number} offY Offset from center of entity (Y)
 * @param {number} offZ Offset from center of entity (Z)
 * @param {number} nComponent Component of the entity to apply the force too. Only matters for breakable or articulated (ragdoll) physics. 0 means the root or parent component
 * @param {boolean} bLocalForce Specifies whether the force vector passed in is in local or world coordinates. true means the force will get automatically transformed into world space before being applied
 * @param {boolean} bLocalOffset Specifies whether the offset passed in is in local or world coordinates
 * @param {boolean} bScaleByMass Specifies whether to scale the force by mass
 * @param {boolean} bPlayAudio Specifies whether to play audio events related to the force being applied. The audio will depend on the entity type. Currently vehicles are the only entity types supported, and will play a suspension squeal depending on the magnitude of the force
 * @param {boolean} bScaleByTimeWarp Specifies whether to scale the force by time warp. Default is true
 */
export function applyForceToEntity(entity: EntityIndex, forceType: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, nComponent: number, bLocalForce: boolean, bLocalOffset: boolean, bScaleByMass: boolean, bPlayAudio: boolean, bScaleByTimeWarp: boolean): void {
	const applyForceToEntity_result = Citizen.invokeNative<void>('0xC1C0855A', entity, forceType, x, y, z, offX, offY, offZ, nComponent, bLocalForce, bLocalOffset, bScaleByMass, bPlayAudio, bScaleByTimeWarp);
	return applyForceToEntity_result;
}