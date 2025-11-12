import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PRIMARY_LOOKAT
 *
 * 0x183A28D5B0D656FF

 * 
 * This is only called once in the scripts.
 * 
 * sub_1CD9(&l_49, 0, getElem(3, &l_34, 4), "MICHAEL", 0, 1);
 *                     sub_1CA8("WORLD_HUMAN_SMOKING", 2);
 *                     PED::SET_PED_PRIMARY_LOOKAT(getElem(3, &l_34, 4), PLAYER::PLAYER_PED_ID());
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} firstPed
 * @param {PedIndex} secondPed
 */
export function setPedPrimaryLookat(firstPed: PedIndex, secondPed: PedIndex): void {
	const setPedPrimaryLookat_result = Citizen.invokeNative<void>('0x183A28D5B0D656FF', firstPed, secondPed);
	return setPedPrimaryLookat_result;
}