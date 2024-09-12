import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FORCE_SUBMARINE_NEUTRAL_BUOYANCY
 *
 * 0xBADC5521D958DD40

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} timeMS
 */
export function forceSubmarineNeutralBuoyancy(vehicle: VehicleIndex, timeMS: number): void {
	const forceSubmarineNeutralBuoyancy_result = Citizen.invokeNative<void>('0xBADC5521D958DD40', vehicle, timeMS);
	return forceSubmarineNeutralBuoyancy_result;
}