/**
 * CAM:_GET_THIRD_PERSON_CAM_MAX_ORBIT_DISTANCE_SPRING
 *
 * 0xD4592A16D36673ED

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getThirdPersonCamMaxOrbitDistanceSpring(): number {
	const getThirdPersonCamMaxOrbitDistanceSpring_result = Citizen.invokeNative<number>('0xD4592A16D36673ED', );
	return getThirdPersonCamMaxOrbitDistanceSpring_result;
}