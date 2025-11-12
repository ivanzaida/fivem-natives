import { EInstanceMode } from '@ivanzaida/structures'

/**
 * MISC:SET_INSTANCE_PRIORITY_MODE
 *
 * 0x2268617D0B5A5B35

 * 
 * tell the game if we're changing between single player and multiplayer, so we can strip out low priority map objects
 * 
 * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
 * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
 * 
 * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EInstanceMode} mode
 */
export function setInstancePriorityMode(mode: EInstanceMode | number): void {
	const setInstancePriorityMode_result = Citizen.invokeNative<void>('0x2268617D0B5A5B35', mode);
	return setInstancePriorityMode_result;
}