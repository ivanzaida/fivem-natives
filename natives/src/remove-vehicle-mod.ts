import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_MOD
 *
 * 0xC87E4FAD00AEDD4B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 */
export function removeVehicleMod(vehicle: VehicleIndex, modSlot: EModType | number): void {
	const removeVehicleMod_result = Citizen.invokeNative<void>('0xC87E4FAD00AEDD4B', vehicle, modSlot);
	return removeVehicleMod_result;
}