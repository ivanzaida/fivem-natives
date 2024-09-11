import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:HAVE_VEHICLE_MODS_STREAMED_IN
 *
 * 0xA7A8B7E924089F0A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function haveVehicleModsStreamedIn(vehicle: VehicleIndex): boolean {
	const haveVehicleModsStreamedIn_result = Citizen.invokeNative<boolean>('0xA7A8B7E924089F0A', vehicle);
	return haveVehicleModsStreamedIn_result;
}