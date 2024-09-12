import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_AI_BLIP_GANG_ID
 *
 * 0x8B185FD7C0308117

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} gangID
 */
export function setPedAiBlipGangId(ped: PedIndex, gangID: number): void {
	const setPedAiBlipGangId_result = Citizen.invokeNative<void>('0x8B185FD7C0308117', ped, gangID);
	return setPedAiBlipGangId_result;
}