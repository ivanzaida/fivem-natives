import { PedIndex, EHeadOverlaySlot, ERampType } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HEAD_OVERLAY_TINT
 *
 * 0x94965BB62753D4D6

 * 
 * ColorType is 1 for eyebrows, beards, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
 * 
 * Called after SET_PED_HEAD_OVERLAY().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EHeadOverlaySlot} slot
 * @param {ERampType} rampType
 * @param {number} tint
 * @param {number} tint2
 */
export function setPedHeadOverlayTint(ped: PedIndex, slot: EHeadOverlaySlot | number, rampType: ERampType | number, tint: number, tint2: number = 0): void {
	const setPedHeadOverlayTint_result = Citizen.invokeNative<void>('0x94965BB62753D4D6', ped, slot, rampType, tint, tint2);
	return setPedHeadOverlayTint_result;
}