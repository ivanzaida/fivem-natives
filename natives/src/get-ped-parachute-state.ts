import { PedIndex, EPedParachuteState } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PARACHUTE_STATE
 *
 * 0x57E7FD3BD6BB28C0

 * 
 * Returns:
 * 
 * -1: Normal
 * 0: Wearing parachute on back
 * 1: Parachute opening
 * 2: Parachute open
 * 3: Falling to doom (e.g. after exiting parachute)
 * 
 * Normal means no parachute?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EPedParachuteState}  
 */
export function getPedParachuteState(ped: PedIndex): EPedParachuteState {
	const getPedParachuteState_result = Citizen.invokeNative<EPedParachuteState>('0x57E7FD3BD6BB28C0', ped);
	return getPedParachuteState_result;
}