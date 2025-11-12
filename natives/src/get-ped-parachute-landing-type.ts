import { PedIndex, EPedParachuteLandingType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_PARACHUTE_LANDING_TYPE
 *
 * 0x2621F11E556C9703

 * 
 * -1: no landing
 * 0: landing on both feet
 * 1: stumbling
 * 2: rolling
 * 3: ragdoll
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {EPedParachuteLandingType}  
 */
export function getPedParachuteLandingType(ped: PedIndex): EPedParachuteLandingType {
	const getPedParachuteLandingType_result = Citizen.invokeNative<EPedParachuteLandingType>('0x2621F11E556C9703', ped);
	return getPedParachuteLandingType_result;
}