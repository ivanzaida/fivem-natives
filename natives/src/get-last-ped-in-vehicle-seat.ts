import { VehicleIndex, EVehicleSeat, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_LAST_PED_IN_VEHICLE_SEAT
 *
 * 0x6B854773972E76E4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {PedIndex}  
 */
export function getLastPedInVehicleSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number = 1): PedIndex {
	const getLastPedInVehicleSeat_result = Citizen.invokeNative<PedIndex>('0x6B854773972E76E4', vehicle, seat);
	return getLastPedInVehicleSeat_result;
}