/**
 * PATHFIND:SET_IGNORE_NO_GPS_FLAG_UNTIL_FIRST_NORMAL_NODE
 *
 * 0x7A0DF3CEAF912D48

 * 
 * See: SET_BLIP_ROUTE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} ignore
 */
export function setIgnoreNoGpsFlagUntilFirstNormalNode(ignore: boolean): void {
	const setIgnoreNoGpsFlagUntilFirstNormalNode_result = Citizen.invokeNative<void>('0x7A0DF3CEAF912D48', ignore);
	return setIgnoreNoGpsFlagUntilFirstNormalNode_result;
}