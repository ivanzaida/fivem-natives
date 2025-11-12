import { VehicleIndex, EHandlingInfos } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HANDLING_OVERRIDE
 *
 * 0x753758951C769A4A

 * 
 * Overrides the handling info for a given vehicle, so it will drive more aggressively
 * or conservatively than normal vehicles of that type
 * 
 * Use the "AIHandling" string found in handling.meta
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EHandlingInfos} handlingOverrideHash
 */
export function setVehicleHandlingOverride(vehicle: VehicleIndex, handlingOverrideHash: EHandlingInfos | number): void {
	const setVehicleHandlingOverride_result = Citizen.invokeNative<void>('0x753758951C769A4A', vehicle, handlingOverrideHash);
	return setVehicleHandlingOverride_result;
}