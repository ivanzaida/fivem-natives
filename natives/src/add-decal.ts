import { EDecalRendersettingId, DecalId } from '@ivanzaida/structures'

/**
 * GRAPHICS:ADD_DECAL
 *
 * 0x0153AEF89004E87C

 * 
 * decal types:
 * 
 * public enum DecalTypes
 * {
 *     splatters_blood = 1010,
 *     splatters_blood_dir = 1015,
 *     splatters_blood_mist = 1017,
 *     splatters_mud = 1020,
 *     splatters_paint = 1030,
 *     splatters_water = 1040,
 *     splatters_water_hydrant = 1050,
 *     splatters_blood2 = 1110,
 *     weapImpact_metal = 4010,
 *     weapImpact_concrete = 4020,
 *     weapImpact_mattress = 4030,
 *     weapImpact_mud = 4032,
 *     weapImpact_wood = 4050,
 *     weapImpact_sand = 4053,
 *     weapImpact_cardboard = 4040,
 *     weapImpact_melee_glass = 4100,
 *     weapImpact_glass_blood = 4102,
 *     weapImpact_glass_blood2 = 4104,
 *     weapImpact_shotgun_paper = 4200,
 *     weapImpact_shotgun_mattress,
 *     weapImpact_shotgun_metal,
 *     weapImpact_shotgun_wood,
 *     weapImpact_shotgun_dirt,
 *     weapImpact_shotgun_tvscreen,
 *     weapImpact_shotgun_tvscreen2,
 *     weapImpact_shotgun_tvscreen3,
 *     weapImpact_melee_concrete = 4310,
 *     weapImpact_melee_wood = 4312,
 *     weapImpact_melee_metal = 4314,
 *     burn1 = 4421,
 *     burn2,
 *     burn3,
 *     burn4,
 *     burn5,
 *     bang_concrete_bang = 5000,
 *     bang_concrete_bang2,
 *     bang_bullet_bang,
 *     bang_bullet_bang2 = 5004,
 *     bang_glass = 5031,
 *     bang_glass2,
 *     solidPool_water = 9000,
 *     solidPool_blood,
 *     solidPool_oil,
 *     solidPool_petrol,
 *     solidPool_mud,
 *     porousPool_water,
 *     porousPool_blood,
 *     porousPool_oil,
 *     porousPool_petrol,
 *     porousPool_mud,
 *     porousPool_water_ped_drip,
 *     liquidTrail_water = 9050
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EDecalRendersettingId} renderSettingsId
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} sideX
 * @param {number} sideY
 * @param {number} sideZ
 * @param {number} width
 * @param {number} height
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} colA
 * @param {number} life
 * @param {boolean} isLongRange
 * @param {boolean} isDynamic
 * @param {boolean} useComplexColn
 * @returns {DecalId}  
 */
export function addDecal(renderSettingsId: EDecalRendersettingId | number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, sideX: number, sideY: number, sideZ: number, width: number, height: number, colR: number, colG: number, colB: number, colA: number, life: number, isLongRange: boolean = false, isDynamic: boolean = false, useComplexColn: boolean = false): DecalId {
	const addDecal_result = Citizen.invokeNative<DecalId>('0x0153AEF89004E87C', renderSettingsId, posX, posY, posZ, dirX, dirY, dirZ, sideX, sideY, sideZ, width, height, colR, colG, colB, colA, life, isLongRange, isDynamic, useComplexColn);
	return addDecal_result;
}