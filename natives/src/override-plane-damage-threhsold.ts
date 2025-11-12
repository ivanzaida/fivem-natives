import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:OVERRIDE_PLANE_DAMAGE_THREHSOLD
 *
 * 0x9DBF1E37DC1A1F46

 * 
 * Used for helis.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} value
 */
export function overridePlaneDamageThrehsold(vehicle: VehicleIndex, value: number): void {
	const overridePlaneDamageThrehsold_result = Citizen.invokeNative<void>('0x9DBF1E37DC1A1F46', vehicle, value);
	return overridePlaneDamageThrehsold_result;
}