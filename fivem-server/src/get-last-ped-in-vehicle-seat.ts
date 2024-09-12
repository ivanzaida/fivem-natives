import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_LAST_PED_IN_VEHICLE_SEAT
 *
 * 0xF7C6792D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @param {number} seatIndex See eSeatPosition declared in [IS_VEHICLE_SEAT_FREE](_0x22AC59A870E6A669).
 * @returns {PedIndex}  
 */
export function getLastPedInVehicleSeat(vehicle: VehicleIndex, seatIndex: number): PedIndex {
	const getLastPedInVehicleSeat_result = Citizen.invokeNative<PedIndex>('0xF7C6792D', vehicle, seatIndex);
	return getLastPedInVehicleSeat_result;
}