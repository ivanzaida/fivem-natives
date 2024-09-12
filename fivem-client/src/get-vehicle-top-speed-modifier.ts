import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TOP_SPEED_MODIFIER
 *
 * 0X998B7FEE

 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {number}  Returns vehicle's modified top speed.
 */
export function getVehicleTopSpeedModifier(vehicle: VehicleIndex): number {
	const getVehicleTopSpeedModifier_result = Citizen.invokeNative<number>('0X998B7FEE', vehicle);
	return getVehicleTopSpeedModifier_result;
}