/**
 * HUD:SET_MINIMAP_GOLF_COURSE_OFF
 *
 * 0x5C2232D1A391966B

 * 
 * ------------------------------------------------------------------
 */
export function setMinimapGolfCourseOff(): void {
	const setMinimapGolfCourseOff_result = Citizen.invokeNative<void>('0x5C2232D1A391966B', );
	return setMinimapGolfCourseOff_result;
}