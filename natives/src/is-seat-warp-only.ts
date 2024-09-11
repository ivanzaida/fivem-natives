import { VehicleIndex, EVehicleSeat } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_SEAT_WARP_ONLY
 *
 * 0x22007BC82AF0074B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EVehicleSeat} seat
 * @returns {boolean}  
 */
export function isSeatWarpOnly(vehicle: VehicleIndex, seat: EVehicleSeat | number): boolean {
	const isSeatWarpOnly_result = Citizen.invokeNative<boolean>('0x22007BC82AF0074B', vehicle, seat);
	return isSeatWarpOnly_result;
}