import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_SMASH_GLASS
 *
 * 0xB2EDAEE9E5BA8E24

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} canSmashGlassFlagRagdoll
 * @param {boolean} canSmashGlassFlagWeapon
 */
export function setPedCanSmashGlass(ped: PedIndex, canSmashGlassFlagRagdoll: boolean, canSmashGlassFlagWeapon: boolean): void {
	const setPedCanSmashGlass_result = Citizen.invokeNative<void>('0xB2EDAEE9E5BA8E24', ped, canSmashGlassFlagRagdoll, canSmashGlassFlagWeapon);
	return setPedCanSmashGlass_result;
}