import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_MODIFIER_VALUE
 *
 * 0x648F2586F927249D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 * @returns {number}  
 */
export function getVehicleModModifierValue(vehicle: VehicleIndex, modSlot: EModType | number, mod: number): number {
	const getVehicleModModifierValue_result = Citizen.invokeNative<number>('0x648F2586F927249D', vehicle, modSlot, mod);
	return getVehicleModModifierValue_result;
}