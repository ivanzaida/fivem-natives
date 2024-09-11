import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_TEAM_PICKUP_OBJECT
 *
 * 0xBF998058B3DD9EEF

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickupID
 * @param {number} team
 * @param {boolean} set
 */
export function setTeamPickupObject(pickupID: ObjectIndex, team: number, set: boolean = true): void {
	const setTeamPickupObject_result = Citizen.invokeNative<void>('0xBF998058B3DD9EEF', pickupID, team, set);
	return setTeamPickupObject_result;
}