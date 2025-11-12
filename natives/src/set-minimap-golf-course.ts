import { EEMinimapGolfCourseHole } from '@ivanzaida/structures'

/**
 * HUD:SET_MINIMAP_GOLF_COURSE
 *
 * 0x6E467B341F61426A

 * 
 * Not much is known so far on what it does _exactly_.
 * All I know for sure is that it draws the specified hole ID on the pause menu map as well as on the mini-map/radar. This native also seems to change some other things related to the pause menu map's behaviour, for example: you can no longer set waypoints, the pause menu map starts up in a 'zoomed in' state. This native does not need to be executed every tick.
 * You need to center the minimap manually as well as change/lock it's zoom and angle in order for it to appear correctly on the minimap.
 * You'll also need to use the `GOLF` scaleform in order to get the correct minmap border to show up.
 * Use `0x35edd5b2e3ff01c0` to reset the map when you no longer want to display any golf holes (you still need to unlock zoom, position and angle of the radar manually after calling this).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEMinimapGolfCourseHole} golfCourseHole
 */
export function setMinimapGolfCourse(golfCourseHole: EEMinimapGolfCourseHole | number): void {
	const setMinimapGolfCourse_result = Citizen.invokeNative<void>('0x6E467B341F61426A', golfCourseHole);
	return setMinimapGolfCourse_result;
}