import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_INACTIVE_DURING_PLAYBACK
 *
 * 0x905AE697A8F8A694

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceInactive
 */
export function setVehicleInactiveDuringPlayback(vehicle: VehicleIndex, forceInactive: boolean): void {
	const setVehicleInactiveDuringPlayback_result = Citizen.invokeNative<void>('0x905AE697A8F8A694', vehicle, forceInactive);
	return setVehicleInactiveDuringPlayback_result;
}