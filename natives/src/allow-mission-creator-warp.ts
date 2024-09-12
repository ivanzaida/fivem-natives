/**
 * MISC:ALLOW_MISSION_CREATOR_WARP
 *
 * 0x8D57FA5F8F95730F

 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function allowMissionCreatorWarp(allow: boolean): void {
	const allowMissionCreatorWarp_result = Citizen.invokeNative<void>('0x8D57FA5F8F95730F', allow);
	return allowMissionCreatorWarp_result;
}