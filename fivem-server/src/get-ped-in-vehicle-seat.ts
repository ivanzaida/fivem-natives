import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_IN_VEHICLE_SEAT
 *
 * 0x388FDE9A

 * 
 * If there is no ped in the seat, and the game considers the vehicle as ambient population, this will create a random occupant ped in the seat, which may be cleaned up by the game fairly soon if not marked as script-owned mission entity.
 * 
 * Seat indexes:
 * -1 = Driver
 * 0 = Front Right Passenger
 * 1 = Back Left Passenger
 * 2 = Back Right Passenger
 * 3 = Further Back Left Passenger (vehicles > 4 seats)
 * 4 = Further Back Right Passenger (vehicles > 4 seats)
 * etc.
 * 
 * If p2 is true it uses a different GetOccupant function.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @param {number} seatIndex See eSeatPosition declared in [IS_VEHICLE_SEAT_FREE](_0x22AC59A870E6A669).
 * @returns {PedIndex}  
 */
export function getPedInVehicleSeat(vehicle: VehicleIndex, seatIndex: number): PedIndex {
	const getPedInVehicleSeat_result = Citizen.invokeNative<PedIndex>('0x388FDE9A', vehicle, seatIndex);
	return getPedInVehicleSeat_result;
}