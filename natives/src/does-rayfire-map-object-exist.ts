import { RayfireIndex } from '@ivanzaida/structures'

/**
 * OBJECT:DOES_RAYFIRE_MAP_OBJECT_EXIST
 *
 * 0x502101046E18AD3F

 * 
 * Returns true if a destructible object with this handle exists, false otherwise.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RayfireIndex} rayFireObject
 * @returns {boolean}  
 */
export function doesRayfireMapObjectExist(rayFireObject: RayfireIndex): boolean {
	const doesRayfireMapObjectExist_result = Citizen.invokeNative<boolean>('0x502101046E18AD3F', rayFireObject);
	return doesRayfireMapObjectExist_result;
}