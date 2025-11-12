import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DISABLE_PLANE_AILERON
 *
 * 0xEB808E35861B8782

 * 
 * Disable or re-enable the planes ailerons(large flaps on wings) Can be used to prevent movement and to effect the handling of a plane
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} leftSide
 * @param {boolean} disable
 */
export function disablePlaneAileron(vehicle: VehicleIndex, leftSide: boolean, disable: boolean): void {
	const disablePlaneAileron_result = Citizen.invokeNative<void>('0xEB808E35861B8782', vehicle, leftSide, disable);
	return disablePlaneAileron_result;
}