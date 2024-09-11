import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_TREAT_AS_AMBIENT_PED_FOR_DRIVER_LOCKON
 *
 * 0x00941975834A0817

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} treatAsAmbientPed
 */
export function setTreatAsAmbientPedForDriverLockon(ped: PedIndex, treatAsAmbientPed: boolean): void {
	const setTreatAsAmbientPedForDriverLockon_result = Citizen.invokeNative<void>('0x00941975834A0817', ped, treatAsAmbientPed);
	return setTreatAsAmbientPedForDriverLockon_result;
}