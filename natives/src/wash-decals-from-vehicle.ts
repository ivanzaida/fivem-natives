import { VehicleIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:WASH_DECALS_FROM_VEHICLE
 *
 * 0x8FD28E44F7FF2A54

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {number} washAmount
 */
export function washDecalsFromVehicle(veh: VehicleIndex, washAmount: number): void {
	const washDecalsFromVehicle_result = Citizen.invokeNative<void>('0x8FD28E44F7FF2A54', veh, washAmount);
	return washDecalsFromVehicle_result;
}