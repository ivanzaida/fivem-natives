import { Slotmachinemetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_SLOT_MACHINE
 *
 * 0x4625293E9A8A8039

 * 
 * ------------------------------------------------------------------
 * @param {Slotmachinemetric} data [Ref]
 */
export function playstatsCasinoSlotMachine(data: Slotmachinemetric /* ptr */): void {
	const playstatsCasinoSlotMachine_result = Citizen.invokeNative<void>('0x4625293E9A8A8039', data.dataView);
	return playstatsCasinoSlotMachine_result;
}