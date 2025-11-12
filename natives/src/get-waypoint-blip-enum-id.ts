import { EBlipSprite } from '@ivanzaida/structures'

/**
 * HUD:GET_WAYPOINT_BLIP_ENUM_ID
 *
 * 0x2A3612A4B836469E

 * 
 * returns an id to pass to blip commands of the code "waypoint" blip
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EBlipSprite}  
 */
export function getWaypointBlipEnumId(): EBlipSprite {
	const getWaypointBlipEnumId_result = Citizen.invokeNative<EBlipSprite>('0x2A3612A4B836469E', );
	return getWaypointBlipEnumId_result;
}