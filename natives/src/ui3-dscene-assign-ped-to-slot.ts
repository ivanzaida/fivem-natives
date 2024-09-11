import { PedIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:UI3DSCENE_ASSIGN_PED_TO_SLOT
 *
 * 0xBB0128A9D53B1935

 * Assigns a ped to a given slot (slotIdx) for the currently set preset; the preset must have been set
 * previously by calling UI3DSCENE_PUSH_PRESET. Call will fail if the preset passed as a parameter does
 * not match the current preset; it will also fail if the ped index is not valid.
 * The posOffset parameter allows to adjust the position of a given ped (e.g.: ped is smaller or taller than
 * the one used for reference when creating the preset).
 * It's called after UI3DSCENE_IS_AVAILABLE and UI3DSCENE_PUSH_PRESET
 * presetName was always "CELEBRATION_WINNER"
 * All presets can be found in common\data\ui\uiscenes.meta
 * 
 * ------------------------------------------------------------------
 * @param {string} presetName
 * @param {PedIndex} ped
 * @param {number} slotIdx
 * @param {number} posOffsetX
 * @param {number} posOffsetY
 * @param {number} posOffsetZ
 * @returns {boolean}  
 */
export function ui3DsceneAssignPedToSlot(presetName: string, ped: PedIndex, slotIdx: number, posOffsetX: number, posOffsetY: number, posOffsetZ: number): boolean {
	const ui3DsceneAssignPedToSlot_result = Citizen.invokeNative<boolean>('0xBB0128A9D53B1935', presetName, ped, slotIdx, posOffsetX, posOffsetY, posOffsetZ);
	return ui3DsceneAssignPedToSlot_result;
}