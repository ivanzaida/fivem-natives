import { PedIndex, EPedDecorationZone } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_DAMAGE_DECAL
 *
 * 0xC9FB3D0735F8ECD9

 * 
 * Applies a ped damage decoration (decal) to the ped, using the data defined in the peddamage.xml tuning file.
 * the decal could be a tatoo, dirt a scar, etc.
 * you can use the widgets in "Peds/Ped Damage/Test Damage Decals by UV (Interactive)" to test u,v values for different zones, etc
 * 
 * enum eDamageZone
 * {
 * 	DZ_Torso = 0,
 * 	DZ_Head,
 * 	DZ_LeftArm,
 * 	DZ_RightArm,
 * 	DZ_LeftLeg,
 * 	DZ_RightLeg,
 * };
 * 
 * Decal Names:
 * scar
 * blushing
 * cs_flush_anger
 * cs_flush_anger_face
 * bruise
 * bruise_large
 * herpes
 * ArmorBullet
 * basic_dirt_cloth
 * basic_dirt_skin
 * cs_trev1_dirt
 * 
 * APPLY_PED_DAMAGE_DECAL(ped, 1, 0.5f, 0.513f, 0f, 1f, unk, 0, 0, "blushing");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedDecorationZone} zone
 * @param {number} u
 * @param {number} v
 * @param {number} rotation
 * @param {number} scale
 * @param {number} alpha
 * @param {number} forceFrame
 * @param {boolean} fadeIn
 * @param {string} damageDecalName
 */
export function applyPedDamageDecal(ped: PedIndex, zone: EPedDecorationZone | number, u: number, v: number, rotation: number, scale: number, alpha: number, forceFrame: number, fadeIn: boolean, damageDecalName: string): void {
	const applyPedDamageDecal_result = Citizen.invokeNative<void>('0xC9FB3D0735F8ECD9', ped, zone, u, v, rotation, scale, alpha, forceFrame, fadeIn, damageDecalName);
	return applyPedDamageDecal_result;
}