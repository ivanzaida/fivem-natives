import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_RAMP_AND_RAMMING_CARS_TAKE_DAMAGE
 *
 * 0x9F0B86B670233A83

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} takeDamage
 */
export function vehicleSetRampAndRammingCarsTakeDamage(vehicle: VehicleIndex, takeDamage: boolean): void {
	const vehicleSetRampAndRammingCarsTakeDamage_result = Citizen.invokeNative<void>('0x9F0B86B670233A83', vehicle, takeDamage);
	return vehicleSetRampAndRammingCarsTakeDamage_result;
}