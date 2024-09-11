import { PedIndex } from '@ivanzaida/structures'

/**
 * MOBILE:CELL_CAM_IS_CHAR_VISIBLE_NO_FACE_CHECK
 *
 * 0xA637EDD71DA667DB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function cellCamIsCharVisibleNoFaceCheck(ped: PedIndex): boolean {
	const cellCamIsCharVisibleNoFaceCheck_result = Citizen.invokeNative<boolean>('0xA637EDD71DA667DB', ped);
	return cellCamIsCharVisibleNoFaceCheck_result;
}