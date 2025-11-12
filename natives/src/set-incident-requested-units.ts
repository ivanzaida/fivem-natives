import { IncidentIndex, EDispatchType } from '@ivanzaida/structures'

/**
 * MISC:SET_INCIDENT_REQUESTED_UNITS
 *
 * 0x399A3B6D30C64629

 * 
 * Updates the number of requested units of the given incident
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IncidentIndex} incident
 * @param {EDispatchType} dispatchType
 * @param {number} numUnits
 */
export function setIncidentRequestedUnits(incident: IncidentIndex, dispatchType: EDispatchType | number, numUnits: number): void {
	const setIncidentRequestedUnits_result = Citizen.invokeNative<void>('0x399A3B6D30C64629', incident, dispatchType, numUnits);
	return setIncidentRequestedUnits_result;
}