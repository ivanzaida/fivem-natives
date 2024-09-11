import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_DISABLE_AVOIDANCE
 *
 * 0x1E11F329546909B8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} disableBoatAvoidance
 */
export function setBoatDisableAvoidance(vehicle: VehicleIndex, disableBoatAvoidance: boolean): void {
	const setBoatDisableAvoidance_result = Citizen.invokeNative<void>('0x1E11F329546909B8', vehicle, disableBoatAvoidance);
	return setBoatDisableAvoidance_result;
}