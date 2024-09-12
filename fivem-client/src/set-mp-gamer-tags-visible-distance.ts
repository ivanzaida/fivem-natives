/**
 * CFX:SET_MP_GAMER_TAGS_VISIBLE_DISTANCE
 *
 * 0XD61676B3

 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * 
 * ------------------------------------------------------------------
 * @param {number} distance The visible distance. Default is 100.0f.
 */
export function setMpGamerTagsVisibleDistance(distance: number): void {
	const setMpGamerTagsVisibleDistance_result = Citizen.invokeNative<void>('0XD61676B3', distance);
	return setMpGamerTagsVisibleDistance_result;
}