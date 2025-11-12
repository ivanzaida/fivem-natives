import { PedIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PED:GET_PED_EXTRACTED_DISPLACEMENT
 *
 * 0x8C4993D059F4DAEB

 * 
 * Gets the offset the specified ped has moved since the previous tick.
 * 
 * If worldSpace is false, the returned offset is relative to the ped. That is, if the ped has moved 1 meter right and 5 meters forward, it'll return 1,5,0.
 * 
 * If worldSpace is true, the returned offset is relative to the world. That is, if the ped has moved 1 meter on the X axis and 5 meters on the Y axis, it'll return 1,5,0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} worldspace
 * @returns {Vector3}  
 */
export function getPedExtractedDisplacement(ped: PedIndex, worldspace: boolean): Vector3 {
	const getPedExtractedDisplacement_result = Citizen.invokeNative<Vector3>('0x8C4993D059F4DAEB', ped, worldspace);
	return getPedExtractedDisplacement_result;
}