import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_WRECKED
 *
 * 0xBA929B36B8BB08EB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setBoatWrecked(vehicle: VehicleIndex): void {
	const setBoatWrecked_result = Citizen.invokeNative<void>('0xBA929B36B8BB08EB', vehicle);
	return setBoatWrecked_result;
}