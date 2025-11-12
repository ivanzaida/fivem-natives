import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:REQUEST_VEHICLE_ASSET
 *
 * 0x7991957B46F22F47

 * 
 * Used to prevent delays for missions peds getting out/in to vehicles waiting for anims to load
 * 
 * REQUEST_VEHICLE_ASSET(GET_HASH_KEY(cargobob3), 3);
 * 
 * vehicle found that have asset's:
 * cargobob3
 * submersible
 * blazer
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @param {number} vehicleRequestFlags Can be from the enum VEHICLE_RESOURCE_FLAGS, then can be combined together using "|"
 */
export function requestVehicleAsset(vehicleModelHashKey: ModelNames, vehicleRequestFlags: number = 3): void {
	const requestVehicleAsset_result = Citizen.invokeNative<void>('0x7991957B46F22F47', vehicleModelHashKey, vehicleRequestFlags);
	return requestVehicleAsset_result;
}