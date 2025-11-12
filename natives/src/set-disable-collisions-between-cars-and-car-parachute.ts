/**
 * OBJECT:SET_DISABLE_COLLISIONS_BETWEEN_CARS_AND_CAR_PARACHUTE
 *
 * 0x7A2982A0B5AB7BEB

 * 
 * Disables collisions between all vehicles and all vehicle parachutes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableCollisions
 */
export function setDisableCollisionsBetweenCarsAndCarParachute(disableCollisions: boolean): void {
	const setDisableCollisionsBetweenCarsAndCarParachute_result = Citizen.invokeNative<void>('0x7A2982A0B5AB7BEB', disableCollisions);
	return setDisableCollisionsBetweenCarsAndCarParachute_result;
}