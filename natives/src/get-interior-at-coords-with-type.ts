import { InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_INTERIOR_AT_COORDS_WITH_TYPE
 *
 * 0x0556019E7EE8EC9A

 * 
 * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
 * 
 * Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))
 * 
 * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
 * 
 * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @param {string} name
 * @returns {InteriorInstanceIndex}  
 */
export function getInteriorAtCoordsWithType(inCoorsX: number, inCoorsY: number, inCoorsZ: number, name: string): InteriorInstanceIndex {
	const getInteriorAtCoordsWithType_result = Citizen.invokeNative<InteriorInstanceIndex>('0x0556019E7EE8EC9A', inCoorsX, inCoorsY, inCoorsZ, name);
	return getInteriorAtCoordsWithType_result;
}