import { VehicleIndex, EVehicleSeat, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_PED_IN_VEHICLE_SEAT
 *
 * 0xFD5C5BBD1FE92BB7

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
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @param {boolean} considerPedUsingSeat
 * @returns {PedIndex}  
 */
export function getPedInVehicleSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number = 1, considerPedUsingSeat: boolean = false): PedIndex {
	const getPedInVehicleSeat_result = Citizen.invokeNative<PedIndex>('0xFD5C5BBD1FE92BB7', vehicle, seat, considerPedUsingSeat);
	return getPedInVehicleSeat_result;
}