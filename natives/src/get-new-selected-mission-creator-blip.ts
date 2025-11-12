import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_NEW_SELECTED_MISSION_CREATOR_BLIP
 *
 * 0x02C5E86CEA1BE784

 * 
 * Returns the blip index of the currently selected mission creator blip.   INVALID is returned if a mission creator blip is not currently highlighted on the map screen.  Will only return the new blip once
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {BlipIndex}  
 */
export function getNewSelectedMissionCreatorBlip(): BlipIndex {
	const getNewSelectedMissionCreatorBlip_result = Citizen.invokeNative<BlipIndex>('0x02C5E86CEA1BE784', );
	return getNewSelectedMissionCreatorBlip_result;
}