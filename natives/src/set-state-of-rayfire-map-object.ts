import { RayfireIndex, ERayFireMapObjectState } from '@ivanzaida/structures'

/**
 * OBJECT:SET_STATE_OF_RAYFIRE_MAP_OBJECT
 *
 * 0xBF86159B8525B1AE

 * 
 * To set a ray fire object up for the map. If you find the named ray fire object
 * Set its state to RFMO_STATE_PRIMING
 * Check that its primed.
 * When primed Set its state to CE_STATE_START_ANIM
 * Note: script can only set the following rayfire states:
 * RFMO_STATE_STARTING
 * RFMO_STATE_PRIMING
 * RFMO_STATE_START_ANIM
 * RFMO_STATE_ENDING
 * RFMO_STATE_RESET
 * RFMO_STATE_PAUSED
 * RFMO_STATE_RESUME
 * 
 * Defines the state of a destructible object.
 * Use the GET_RAYFIRE_MAP_OBJECT native to find an object's handle with its name / coords.
 * State 2 == object just spawned
 * State 4 == Beginning of the animation
 * State 6 == Start animation
 * State 9 == End of the animation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RayfireIndex} rayFireObject
 * @param {ERayFireMapObjectState} state
 */
export function setStateOfRayfireMapObject(rayFireObject: RayfireIndex, state: ERayFireMapObjectState | number): void {
	const setStateOfRayfireMapObject_result = Citizen.invokeNative<void>('0xBF86159B8525B1AE', rayFireObject, state);
	return setStateOfRayfireMapObject_result;
}