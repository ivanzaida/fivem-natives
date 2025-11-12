import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:TRACK_VEHICLE_VISIBILITY
 *
 * 0x8FBF79AC214E3747

 * 
 * in script hook .net
 * 
 * Vehicle v = ...;
 * Function.Call(Hash.TRACK_VEHICLE_VISIBILITY, v.Handle);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function trackVehicleVisibility(vehicle: VehicleIndex): void {
	const trackVehicleVisibility_result = Citizen.invokeNative<void>('0x8FBF79AC214E3747', vehicle);
	return trackVehicleVisibility_result;
}