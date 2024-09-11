import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_ANCHOR
 *
 * 0x3E29597A27D861B2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} anchoredFlag
 */
export function setBoatAnchor(vehicle: VehicleIndex, anchoredFlag: boolean): void {
	const setBoatAnchor_result = Citizen.invokeNative<void>('0x3E29597A27D861B2', vehicle, anchoredFlag);
	return setBoatAnchor_result;
}