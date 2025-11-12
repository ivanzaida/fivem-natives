import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:APPLY_PED_BLOOD
 *
 * 0xFFD554A221AA80F0

 * 
 * This function assumes you know what component was hit, so I can reverse transform the position into the models space.
 * 
 * woundTypes:
 * - soak_splat
 * - wound_sheet
 * - BulletSmall
 * - BulletLarge
 * - ShotgunSmall
 * - ShotgunSmallMonolithic
 * - ShotgunLarge
 * - ShotgunLargeMonolithic
 * - NonFatalHeadshot
 * - stab
 * - BasicSlash
 * - Scripted_Ped_Splash_Back
 * - BackSplash
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} component
 * @param {number} vecPosX
 * @param {number} vecPosY
 * @param {number} vecPosZ
 * @param {string} bloodName
 */
export function applyPedBlood(ped: PedIndex, component: number, vecPosX: number, vecPosY: number, vecPosZ: number, bloodName: string): void {
	const applyPedBlood_result = Citizen.invokeNative<void>('0xFFD554A221AA80F0', ped, component, vecPosX, vecPosY, vecPosZ, bloodName);
	return applyPedBlood_result;
}