import { VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_TURRET_SEAT
 *
 * 0x333A2A6253C809D2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {boolean}  
 */
export function isTurretSeat(vehicle: VehicleIndex, seat: EVehicleSeat | number): boolean {
	const isTurretSeat_result = Citizen.invokeNative<boolean>('0x333A2A6253C809D2', vehicle, seat);
	return isTurretSeat_result;
}