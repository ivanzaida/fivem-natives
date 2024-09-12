import { Slotmachinemetriclight } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CASINO_SLOT_MACHINE_LIGHT
 *
 * 0x6D9B2D5FF44B7412

 * 
 * ------------------------------------------------------------------
 * @param {Slotmachinemetriclight} data [Ref]
 */
export function playstatsCasinoSlotMachineLight(data: Slotmachinemetriclight /* ptr */): void {
	const playstatsCasinoSlotMachineLight_result = Citizen.invokeNative<void>('0x6D9B2D5FF44B7412', data.dataView);
	return playstatsCasinoSlotMachineLight_result;
}