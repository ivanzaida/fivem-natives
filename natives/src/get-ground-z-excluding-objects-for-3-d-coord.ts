import { FloatRef } from '@ivanzaida/structures'

/**
 * MISC:GET_GROUND_Z_EXCLUDING_OBJECTS_FOR_3D_COORD
 *
 * 0x81AB70B3FE98F1DF

 * 
 * Trys to store the Z coordinate the highest ground below the given point. This test excludes any objects that are on the ground.
 * if waterAsGround is set to TRUE water will be included in the check and the height of that will be returned if it is greater than the ground
 * The command will return TRUE if it finds collision, FALSE if not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {FloatRef} outZ [Ref]
 * @param {boolean} waterAsGround
 * @param {boolean} ignoreDistToWaterLevelCheck
 * @returns {boolean}  
 */
export function getGroundZExcludingObjectsFor_3DCoord(coorsX: number, coorsY: number, coorsZ: number, outZ: FloatRef /* ptr */, waterAsGround: boolean = false, ignoreDistToWaterLevelCheck: boolean = false): boolean {
	const getGroundZExcludingObjectsFor_3DCoord_result = Citizen.invokeNative<boolean>('0x81AB70B3FE98F1DF', coorsX, coorsY, coorsZ, outZ.dataView, waterAsGround, ignoreDistToWaterLevelCheck);
	return getGroundZExcludingObjectsFor_3DCoord_result;
}