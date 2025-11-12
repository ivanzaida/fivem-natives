import { PedIndex, EAlertnessState } from '@ivanzaida/structures'

/**
 * PED:GET_PED_ALERTNESS
 *
 * 0xD8746B5875BA4019

 * 
 * Returns the ped's alertness (0-3).
 * 
 * Values :
 * 
 * 0 : Neutral
 * 1 : Heard something (gun shot, hit, etc)
 * 2 : Knows (the origin of the event)
 * 3 : Fully alerted (is facing the event?)
 * 
 * If the Ped does not exist, returns -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EAlertnessState}  
 */
export function getPedAlertness(ped: PedIndex): EAlertnessState {
	const getPedAlertness_result = Citizen.invokeNative<EAlertnessState>('0xD8746B5875BA4019', ped);
	return getPedAlertness_result;
}