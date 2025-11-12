import { PedIndex, EPedBonetag, Vector3 } from '@ivanzaida/structures'

/**
 * PED:GET_PED_BONE_COORDS
 *
 * 0x83FDC027F0BEA202

 * 
 * Check that WAS_PED_SKELETON_UPDATED returns TRUE before calling this function
 * 
 * Gets the position of the specified bone of the specified ped.
 * 
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedBonetag} bone
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @returns {Vector3}  
 */
export function getPedBoneCoords(ped: PedIndex, bone: EPedBonetag | number, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number): Vector3 {
	const getPedBoneCoords_result = Citizen.invokeNative<Vector3>('0x83FDC027F0BEA202', ped, bone, vecOffsetX, vecOffsetY, vecOffsetZ);
	return getPedBoneCoords_result;
}