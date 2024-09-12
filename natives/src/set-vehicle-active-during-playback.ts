import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ACTIVE_DURING_PLAYBACK
 *
 * 0xF2FCE3F2F4D0CB50

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceActive
 */
export function setVehicleActiveDuringPlayback(vehicle: VehicleIndex, forceActive: boolean): void {
	const setVehicleActiveDuringPlayback_result = Citizen.invokeNative<void>('0xF2FCE3F2F4D0CB50', vehicle, forceActive);
	return setVehicleActiveDuringPlayback_result;
}