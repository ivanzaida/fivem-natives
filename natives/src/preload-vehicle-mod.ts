import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:PRELOAD_VEHICLE_MOD
 *
 * 0x714EDA9C467D9D0A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 */
export function preloadVehicleMod(vehicle: VehicleIndex, modSlot: EModType | number, mod: number): void {
	const preloadVehicleMod_result = Citizen.invokeNative<void>('0x714EDA9C467D9D0A', vehicle, modSlot, mod);
	return preloadVehicleMod_result;
}