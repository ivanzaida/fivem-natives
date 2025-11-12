import { PedIndex, EPedCompFlags } from '@ivanzaida/structures'

/**
 * PED:GIVE_PED_HELMET
 *
 * 0x165FAFDA0B5E4A40

 * 
 * PoliceMotorcycleHelmet   1024
 * RegularMotorcycleHelmet   4096
 * FiremanHelmet 16384
 * PilotHeadset  32768
 * PilotHelmet   65536
 * --
 * p2 is generally 4096 or 16384 in the scripts. p1 varies between 1 and 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} dontTakeOffHelmet
 * @param {EPedCompFlags} helmetPropFlag
 * @param {number} overwriteHelmetTexId
 */
export function givePedHelmet(ped: PedIndex, dontTakeOffHelmet: boolean = true, helmetPropFlag: EPedCompFlags | number = 4096, overwriteHelmetTexId: number = 1): void {
	const givePedHelmet_result = Citizen.invokeNative<void>('0x165FAFDA0B5E4A40', ped, dontTakeOffHelmet, helmetPropFlag, overwriteHelmetTexId);
	return givePedHelmet_result;
}