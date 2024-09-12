import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FORCE_SUBMARINE_NEUTRAL_BUOYANCY
 *
 * 0xBADC5521D958DD40

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicleIndex
 * @param {number} timeMS
 */
export function forceSubmarineNeutralBuoyancy(vehicleIndex: VehicleIndex, timeMS: number): void {
	const forceSubmarineNeutralBuoyancy_result = Citizen.invokeNative<void>('0xBADC5521D958DD40', vehicleIndex, timeMS);
	return forceSubmarineNeutralBuoyancy_result;
}