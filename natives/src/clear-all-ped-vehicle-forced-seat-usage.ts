import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_ALL_PED_VEHICLE_FORCED_SEAT_USAGE
 *
 * 0x3805B001642BC9B1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearAllPedVehicleForcedSeatUsage(ped: PedIndex): void {
	const clearAllPedVehicleForcedSeatUsage_result = Citizen.invokeNative<void>('0x3805B001642BC9B1', ped);
	return clearAllPedVehicleForcedSeatUsage_result;
}