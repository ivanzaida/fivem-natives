import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD
 *
 * 0x94C9CD3D66808551

 * 
 * In b944, there are 50 (0 - 49) mod types. See SET_VEHICLE_MOD for the list.
 * 
 * Returns -1 if the vehicle mod is stock
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @returns {number}  
 */
export function getVehicleMod(vehicle: VehicleIndex, modSlot: EModType | number): number {
	const getVehicleMod_result = Citizen.invokeNative<number>('0x94C9CD3D66808551', vehicle, modSlot);
	return getVehicleMod_result;
}