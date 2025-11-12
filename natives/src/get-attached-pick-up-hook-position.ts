import { VehicleIndex, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_ATTACHED_PICK_UP_HOOK_POSITION
 *
 * 0xA22032FB8CF69F27

 * 
 * Gets the position of the cargobob hook, in world coords.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {Vector3}  
 */
export function getAttachedPickUpHookPosition(vehicle: VehicleIndex): Vector3 {
	const getAttachedPickUpHookPosition_result = Citizen.invokeNative<Vector3>('0xA22032FB8CF69F27', vehicle);
	return getAttachedPickUpHookPosition_result;
}