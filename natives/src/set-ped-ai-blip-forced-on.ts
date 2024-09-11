import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_AI_BLIP_FORCED_ON
 *
 * 0xB070F32F5FE88A2A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} onOff
 */
export function setPedAiBlipForcedOn(ped: PedIndex, onOff: boolean): void {
	const setPedAiBlipForcedOn_result = Citizen.invokeNative<void>('0xB070F32F5FE88A2A', ped, onOff);
	return setPedAiBlipForcedOn_result;
}