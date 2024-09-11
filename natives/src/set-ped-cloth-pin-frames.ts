import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CLOTH_PIN_FRAMES
 *
 * 0x5B0311DB2CD63603

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pinFrames
 */
export function setPedClothPinFrames(ped: PedIndex, pinFrames: number): void {
	const setPedClothPinFrames_result = Citizen.invokeNative<void>('0x5B0311DB2CD63603', ped, pinFrames);
	return setPedClothPinFrames_result;
}