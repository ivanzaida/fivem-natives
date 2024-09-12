import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * STREAMING:SET_INTERIOR_ACTIVE
 *
 * 0xE3D86F90541BD5EF

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorId
 * @param {boolean} activate
 */
export function setInteriorActive(interiorId: InteriorInstanceIndex, activate: boolean): void {
	const setInteriorActive_result = Citizen.invokeNative<void>('0xE3D86F90541BD5EF', interiorId, activate);
	return setInteriorActive_result;
}