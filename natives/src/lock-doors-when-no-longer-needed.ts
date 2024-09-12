import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:LOCK_DOORS_WHEN_NO_LONGER_NEEDED
 *
 * 0x5A78FA8C86A9587A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function lockDoorsWhenNoLongerNeeded(vehicle: VehicleIndex): void {
	const lockDoorsWhenNoLongerNeeded_result = Citizen.invokeNative<void>('0x5A78FA8C86A9587A', vehicle);
	return lockDoorsWhenNoLongerNeeded_result;
}