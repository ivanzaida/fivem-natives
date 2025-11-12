import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:SET_USE_KINEMATIC_PHYSICS
 *
 * 0x5FB8641E415105C3

 * 
 * PED_RAGDOLL_BUMP Proof?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @param {boolean} useKinematic
 */
export function setUseKinematicPhysics(entityId: EntityIndex, useKinematic: boolean): void {
	const setUseKinematicPhysics_result = Citizen.invokeNative<void>('0x5FB8641E415105C3', entityId, useKinematic);
	return setUseKinematicPhysics_result;
}