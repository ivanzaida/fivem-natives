import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:_SET_PED_EYE_COLOR
 *
 * 0XEC09DB1B

 * Used for freemode (online) characters.Indices:1.  black2.  very light blue/green3.  dark blue4.  brown5.  darker brown6.  light brown7.  blue8.  light blue9.  pink10. yellow11. purple12. black13. dark green14. light brown15. yellow/black pattern16. light colored spiral pattern17. shiny red18. shiny half blue/half red19. half black/half light blue20. white/red perimter21. green snake22. red snake23. dark blue snake24. dark yellow25. bright yellow26. all black27. red small pupil28. devil blue/black29. white small pupil30. glossed overThis is the server-side RPC native equivalent of the client native [\_SET\_PED\_EYE\_COLOR](?_0x50B56988B170AFDF).
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} index
 */
export function setPedEyeColor(ped: PedIndex, index: number): void {
	const setPedEyeColor_result = Citizen.invokeNative<void>('0XEC09DB1B', ped, index);
	return setPedEyeColor_result;
}