import { IncidentIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_IDEAL_SPAWN_DISTANCE_FOR_INCIDENT
 *
 * 0xBF2292E4C98122D5

 * 
 * Sets the ideal spawn distance for the incident
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IncidentIndex} incident
 * @param {number} distance
 */
export function setIdealSpawnDistanceForIncident(incident: IncidentIndex, distance: number): void {
	const setIdealSpawnDistanceForIncident_result = Citizen.invokeNative<void>('0xBF2292E4C98122D5', incident, distance);
	return setIdealSpawnDistanceForIncident_result;
}