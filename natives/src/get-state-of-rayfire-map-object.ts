import { RayfireIndex, ERayFireMapObjectState } from '@ivanzaida/structures'

/**
 * OBJECT:GET_STATE_OF_RAYFIRE_MAP_OBJECT
 *
 * 0xEB4069FA281FFD9B

 * 
 * Get a destructible object's state.
 * Substract 1 to get the real state.
 * See SET_STATE_OF_RAYFIRE_MAP_OBJECT to see the different states
 * For example, if the object just spawned (state 2), the native will return 3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RayfireIndex} rayFireObject
 * @returns {ERayFireMapObjectState}  
 */
export function getStateOfRayfireMapObject(rayFireObject: RayfireIndex): ERayFireMapObjectState {
	const getStateOfRayfireMapObject_result = Citizen.invokeNative<ERayFireMapObjectState>('0xEB4069FA281FFD9B', rayFireObject);
	return getStateOfRayfireMapObject_result;
}