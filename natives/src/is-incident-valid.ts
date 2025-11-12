import { IncidentIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_INCIDENT_VALID
 *
 * 0x5BA108AB15E668B7

 * 
 * Returns if the given incident is still valid
 * 
 * =======================================================
 * Correction, I have change this to int, instead of int
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IncidentIndex} incident
 * @returns {boolean}  
 */
export function isIncidentValid(incident: IncidentIndex): boolean {
	const isIncidentValid_result = Citizen.invokeNative<boolean>('0x5BA108AB15E668B7', incident);
	return isIncidentValid_result;
}