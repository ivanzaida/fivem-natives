import { IncidentIndex } from '@ivanzaida/structures'

/**
 * MISC:DELETE_INCIDENT
 *
 * 0x3D09B44C2ACEA592

 * 
 * Deletes the given incident
 * 
 * Delete an incident with a given id.
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
 */
export function deleteIncident(incident: IncidentIndex): void {
	const deleteIncident_result = Citizen.invokeNative<void>('0x3D09B44C2ACEA592', incident);
	return deleteIncident_result;
}