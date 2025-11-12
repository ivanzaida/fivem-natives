import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_DAMAGE_PACK
 *
 * 0x5909C9E03CEF097D

 * 
 * Damage Packs:
 * 
 * "SCR_TrevorTreeBang"
 * "HOSPITAL_0"
 * "HOSPITAL_1"
 * "HOSPITAL_2"
 * "HOSPITAL_3"
 * "HOSPITAL_4"
 * "HOSPITAL_5"
 * "HOSPITAL_6"
 * "HOSPITAL_7"
 * "HOSPITAL_8"
 * "HOSPITAL_9"
 * "SCR_Dumpster"
 * "BigHitByVehicle"
 * "SCR_Finale_Michael_Face"
 * "SCR_Franklin_finb"
 * "SCR_Finale_Michael"
 * "SCR_Franklin_finb2"
 * "Explosion_Med"
 * "SCR_Torture"
 * "SCR_TracySplash"
 * "Skin_Melee_0"
 * 
 * Additional damage packs:
 * 
 * gist.github.com/alexguirre/f3f47f75ddcf617f416f3c8a55ae2227
 * Full list of ped damage packs by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedDamagePacks.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} packName
 * @param {number} preAge
 * @param {number} alpha
 */
export function applyPedDamagePack(ped: PedIndex, packName: string, preAge: number, alpha: number): void {
	const applyPedDamagePack_result = Citizen.invokeNative<void>('0x5909C9E03CEF097D', ped, packName, preAge, alpha);
	return applyPedDamagePack_result;
}