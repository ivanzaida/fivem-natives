import { EntityIndex, EApplyForceType } from '@ivanzaida/structures'

/**
 * ENTITY:APPLY_FORCE_TO_ENTITY_CENTER_OF_MASS
 *
 * 0x96CCECDBC57DA984

 * 
 * Applies a force to the specified entity.
 * 
 * List of force types (p1):
 * public enum ForceType
 * {
 *     MinForce = 0,
 *     MaxForceRot = 1,
 *     MinForce2 = 2,
 *     MaxForceRot2 = 3,
 *     ForceNoRot = 4,
 *     ForceRotPlusForce = 5
 * }
 * Research/documentation on the gtaforums can be found here https://gtaforums.com/topic/885669-precisely-define-object-physics/) and here https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/.
 * 
 * p6/relative - makes the xyz force not relative to world coords, but to something else
 * p7/highForce - setting false will make the force really low
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EApplyForceType} applyType
 * @param {number} forceX
 * @param {number} forceY
 * @param {number} forceZ
 * @param {number} component
 * @param {boolean} localForce
 * @param {boolean} scaleByMass
 * @param {boolean} applyToChildren
 */
export function applyForceToEntityCenterOfMass(entity: EntityIndex, applyType: EApplyForceType | number, forceX: number, forceY: number, forceZ: number, component: number, localForce: boolean, scaleByMass: boolean, applyToChildren: boolean = false): void {
	const applyForceToEntityCenterOfMass_result = Citizen.invokeNative<void>('0x96CCECDBC57DA984', entity, applyType, forceX, forceY, forceZ, component, localForce, scaleByMass, applyToChildren);
	return applyForceToEntityCenterOfMass_result;
}