import { FloatRef } from '@ivanzaida/structures'

/**
 * MISC:GET_GROUND_Z_FOR_3D_COORD
 *
 * 0xB1EAADCB692D69CE

 * 
 * The command will return TRUE if it finds collision, FALSE if not.
 * 
 * Gets the ground elevation at the specified position. Note that if the specified position is below ground level, the function will output zero!
 * 
 * x: Position on the X-axis to get ground elevation at.
 * y: Position on the Y-axis to get ground elevation at.
 * z: Position on the Z-axis to get ground elevation at.
 * groundZ: The ground elevation at the specified position.
 * ignoreWater: Nearly always 0, very rarely 1 in the scripts: https://gfycat.com/NiftyTatteredCricket
 * 
 * Bear in mind this native can only calculate the elevation when the coordinates are within the client's render distance.
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
export function getGroundZFor_3DCoord(coorsX: number, coorsY: number, coorsZ: number, outZ: FloatRef /* ptr */, waterAsGround: boolean = false, ignoreDistToWaterLevelCheck: boolean = false): boolean {
	const getGroundZFor_3DCoord_result = Citizen.invokeNative<boolean>('0xB1EAADCB692D69CE', coorsX, coorsY, coorsZ, outZ.dataView, waterAsGround, ignoreDistToWaterLevelCheck);
	return getGroundZFor_3DCoord_result;
}