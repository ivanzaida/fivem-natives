import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:ENABLE_VEHICLE_FANBELT_DAMAGE
 *
 * 0x2F0DDBBB402A1C2F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableFanbeltDamage
 */
export function enableVehicleFanbeltDamage(vehicle: VehicleIndex, enableFanbeltDamage: boolean): void {
	const enableVehicleFanbeltDamage_result = Citizen.invokeNative<void>('0x2F0DDBBB402A1C2F', vehicle, enableFanbeltDamage);
	return enableVehicleFanbeltDamage_result;
}