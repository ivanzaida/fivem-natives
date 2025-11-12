import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEALTH_MOVEMENT
 *
 * 0xF9358C41CC69C616

 * 
 * p1 is usually 0 in the scripts. action is either 0 or a pointer to "DEFAULT_ACTION".
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} stealth
 * @param {string} movementModeName
 */
export function setPedStealthMovement(ped: PedIndex, stealth: boolean, movementModeName: string = null!): void {
	const setPedStealthMovement_result = Citizen.invokeNative<void>('0xF9358C41CC69C616', ped, stealth, movementModeName);
	return setPedStealthMovement_result;
}