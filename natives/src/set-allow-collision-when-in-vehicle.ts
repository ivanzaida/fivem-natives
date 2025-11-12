/**
 * VEHICLE:_SET_ALLOW_COLLISION_WHEN_IN_VEHICLE
 *
 * 0x27D27223E8EF22ED

 * 
 * _SET_ALLOW_R - _SET_ALLOW_V
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setAllowCollisionWhenInVehicle(): void {
	const setAllowCollisionWhenInVehicle_result = Citizen.invokeNative<void>('0x27D27223E8EF22ED', );
	return setAllowCollisionWhenInVehicle_result;
}