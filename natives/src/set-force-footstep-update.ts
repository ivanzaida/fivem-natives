import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_FORCE_FOOTSTEP_UPDATE
 *
 * 0x711F9BE10FCB4E6B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} val
 */
export function setForceFootstepUpdate(ped: PedIndex, val: boolean): void {
	const setForceFootstepUpdate_result = Citizen.invokeNative<void>('0x711F9BE10FCB4E6B', ped, val);
	return setForceFootstepUpdate_result;
}