import { VehicleIndex, EModType } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_IDENTIFIER_HASH
 *
 * 0xC90C649EB3EB4B1B

 * 
 * Can be used for IS_DLC_VEHICLE_MOD and GET_DLC_VEHICLE_MOD_LOCK_HASH
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModType} modSlot
 * @param {number} mod
 * @returns {number}  
 */
export function getVehicleModIdentifierHash(vehicle: VehicleIndex, modSlot: EModType | number, mod: number): number {
	const getVehicleModIdentifierHash_result = Citizen.invokeNative<number>('0xC90C649EB3EB4B1B', vehicle, modSlot, mod);
	return getVehicleModIdentifierHash_result;
}