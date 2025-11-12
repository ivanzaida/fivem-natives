import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_VARIATION
 *
 * 0xEFDD8C5443F6C9E4

 * 
 * Only used for wheels(ModType = 23/24) Returns true if the wheels are custom wheels
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @returns {number}  
 */
export function getVehicleModVariation(vehicle: VehicleIndex, modSlot: EModType | number): number {
	const getVehicleModVariation_result = Citizen.invokeNative<number>('0xEFDD8C5443F6C9E4', vehicle, modSlot);
	return getVehicleModVariation_result;
}