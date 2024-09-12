import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_ROLL_BIAS
 *
 * 0x264B45DE

 * Set the vehicle's roll bias. Only works on planes.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle Target vehicle.
 * @param {number} value Roll bias value.
 */
export function setVehicleRollBias(vehicle: VehicleIndex, value: number): void {
	const setVehicleRollBias_result = Citizen.invokeNative<void>('0x264B45DE', vehicle, value);
	return setVehicleRollBias_result;
}