import { EEMpTag } from '@ivanzaida/structures'

/**
 * HUD:SET_MP_GAMER_TAG_VISIBILITY
 *
 * 0x7BD00A82CE7156C1

 * enum eMpGamerTagComponent
 * {
 * 	MP_TAG_GAMER_NAME,
 * 	MP_TAG_CREW_TAG,
 * 	MP_TAG_HEALTH_ARMOUR,
 * 	MP_TAG_BIG_TEXT,
 * 	MP_TAG_AUDIO_ICON,
 * 	MP_TAG_USING_MENU,
 * 	MP_TAG_PASSIVE_MODE,
 * 	MP_TAG_WANTED_STARS,
 * 	MP_TAG_DRIVER,
 * 	MP_TAG_CO_DRIVER,
 * 	MP_TAG_TAGGED,
 * 	MP_TAG_GAMER_NAME_NEARBY,
 * 	MP_TAG_ARROW,
 * 	MP_TAG_PACKAGES,
 * 	MP_TAG_INV_IF_PED_FOLLOWING,
 * 	MP_TAG_RANK_TEXT,
 * 	MP_TAG_TYPING,
 * 	MP_TAG_BAG_LARGE,
 * 	MP_TAG_ARROW,
 * 	MP_TAG_GANG_CEO,
 * 	MP_TAG_GANG_BIKER,
 * 	MP_TAG_BIKER_ARROW,
 * 	MP_TAG_MC_ROLE_PRESIDENT,
 * 	MP_TAG_MC_ROLE_VICE_PRESIDENT,
 * 	MP_TAG_MC_ROLE_ROAD_CAPTAIN,
 * 	MP_TAG_MC_ROLE_SARGEANT,
 * 	MP_TAG_MC_ROLE_ENFORCER,
 * 	MP_TAG_MC_ROLE_PROSPECT,
 * 	MP_TAG_TRANSMITTER,
 * 	MP_TAG_BOMB
 * };
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {EEMpTag} tag
 * @param {boolean} visible
 * @param {boolean} evenInCars
 */
export function setMpGamerTagVisibility(playerNum: number, tag: EEMpTag | number, visible: boolean, evenInCars: boolean = false): void {
	const setMpGamerTagVisibility_result = Citizen.invokeNative<void>('0x7BD00A82CE7156C1', playerNum, tag, visible, evenInCars);
	return setMpGamerTagVisibility_result;
}