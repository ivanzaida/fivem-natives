import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ENABLE_CREW_EMBLEM
 *
 * 0xE8CE8BAA294AD605

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setPedEnableCrewEmblem(ped: PedIndex, enable: boolean): void {
	const setPedEnableCrewEmblem_result = Citizen.invokeNative<void>('0xE8CE8BAA294AD605', ped, enable);
	return setPedEnableCrewEmblem_result;
}