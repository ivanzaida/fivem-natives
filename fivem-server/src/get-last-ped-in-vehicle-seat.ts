import { VehicleIndex, EVehicleSeat, PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_LAST_PED_IN_VEHICLE_SEAT
 *
 * 0XF7C6792D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {PedIndex}  
 */
export function getLastPedInVehicleSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number = 1): PedIndex {
	const getLastPedInVehicleSeat_result = Citizen.invokeNative<PedIndex>('0XF7C6792D', vehicle, seat);
	return getLastPedInVehicleSeat_result;
}