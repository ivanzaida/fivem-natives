/**
 * CAM:_GET_THIRD_PERSON_CAM_MIN_ORBIT_DISTANCE_SPRING
 *
 * 0xBC456FB703431785

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getThirdPersonCamMinOrbitDistanceSpring(): number {
	const getThirdPersonCamMinOrbitDistanceSpring_result = Citizen.invokeNative<number>('0xBC456FB703431785', );
	return getThirdPersonCamMinOrbitDistanceSpring_result;
}