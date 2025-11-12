import { PedIndex, EAlertnessState } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALERTNESS
 *
 * 0x085B81BB17715A70

 * 
 * value ranges from 0 to 3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAlertnessState} alertState
 */
export function setPedAlertness(ped: PedIndex, alertState: EAlertnessState | number): void {
	const setPedAlertness_result = Citizen.invokeNative<void>('0x085B81BB17715A70', ped, alertState);
	return setPedAlertness_result;
}