import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_ENABLE_RAMP_CAR_SIDE_IMPULSE
 *
 * 0x9CAB1193A04940AC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} takeDamage
 */
export function vehicleSetEnableRampCarSideImpulse(vehicle: VehicleIndex, takeDamage: boolean): void {
	const vehicleSetEnableRampCarSideImpulse_result = Citizen.invokeNative<void>('0x9CAB1193A04940AC', vehicle, takeDamage);
	return vehicleSetEnableRampCarSideImpulse_result;
}