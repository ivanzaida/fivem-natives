/**
 * HUD:IS_HOVERING_OVER_MISSION_CREATOR_BLIP
 *
 * 0x4F9B9AA859613995

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHoveringOverMissionCreatorBlip(): boolean {
	const isHoveringOverMissionCreatorBlip_result = Citizen.invokeNative<boolean>('0x4F9B9AA859613995', );
	return isHoveringOverMissionCreatorBlip_result;
}