import { PedIndex, EIkPart, EntityIndex, EIkTargetFlags } from '@ivanzaida/structures'

/**
 * PED:SET_IK_TARGET
 *
 * 0xF9F66C74E3167674

 * 
 * Sets the IK target for a given IK part belonging to the ped. The IK target will only be valid for one update, so it needs to be set for as long as it is needed (to avoid IK targets not being cleared and getting stuck enabled).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EIkPart} ikPart
 * @param {EntityIndex} targetEntity
 * @param {number} targetBone
 * @param {number} targetOffsetX
 * @param {number} targetOffsetY
 * @param {number} targetOffsetZ
 * @param {EIkTargetFlags} flags
 * @param {number} blendInTimeMS
 * @param {number} blendOutTimeMS
 */
export function setIkTarget(ped: PedIndex, ikPart: EIkPart | number, targetEntity: EntityIndex, targetBone: number, targetOffsetX: number, targetOffsetY: number, targetOffsetZ: number, flags: EIkTargetFlags | number, blendInTimeMS: number = 1, blendOutTimeMS: number = 1): void {
	const setIkTarget_result = Citizen.invokeNative<void>('0xF9F66C74E3167674', ped, ikPart, targetEntity, targetBone, targetOffsetX, targetOffsetY, targetOffsetZ, flags, blendInTimeMS, blendOutTimeMS);
	return setIkTarget_result;
}