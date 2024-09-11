import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALLOWED_TO_DUCK
 *
 * 0x4CE80A0172B32F75

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowedToDuckFlag
 */
export function setPedAllowedToDuck(ped: PedIndex, allowedToDuckFlag: boolean): void {
	const setPedAllowedToDuck_result = Citizen.invokeNative<void>('0x4CE80A0172B32F75', ped, allowedToDuckFlag);
	return setPedAllowedToDuck_result;
}