import { EEAudibility } from '@ivanzaida/structures'

/**
 * AUDIO:ADD_LINE_TO_CONVERSATION
 *
 * 0xC401B1960D35A6C4

 * 
 * Please keep all NATIVE definitions to a single line of code, to simplify some extra processing we need to do.
 * 
 * NOTE: ones that are -1, 0 - 35 are determined by a function where it gets a TextLabel from a global then runs,
 * GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME and depending on what the result is it goes in check order of 0 - 9 then A - Z then z (lowercase). So it will then return 0 - 35 or -1 if it's 'z'. The func to handle that ^^ is func_67 in dialog_handler.c atleast in TU27 Xbox360 scripts.
 * 
 * p0 is -1, 0 - 35
 * p1 is a char or string (whatever you wanna call it)
 * p2 is Global 10597 + i  6. 'i' is a while(i < 70) loop
 * p3 is again -1, 0 - 35
 * p4 is again -1, 0 - 35
 * p5 is either 0 or 1 (bool ?)
 * p6 is either 0 or 1 (The func to determine this is bool)
 * p7 is either 0 or 1 (The func to determine this is bool)
 * p8 is either 0 or 1 (The func to determine this is bool)
 * p9 is 0 - 3 (Determined by func_60 in dialogue_handler.c)
 * p10 is either 0 or 1 (The func to determine this is bool)
 * p11 is either 0 or 1 (The func to determine this is bool)
 * p12 is unknown as in TU27 X360 scripts it only goes to p11.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} speakerNumber
 * @param {string} context
 * @param {string} subtitle
 * @param {number} listenerNumber
 * @param {number} volumeType
 * @param {boolean} isRandom
 * @param {boolean} interruptible
 * @param {boolean} ducksRadio
 * @param {boolean} ducksScore
 * @param {EEAudibility} audibility
 * @param {boolean} headset
 * @param {boolean} dontInterruptForSpecialAbility
 * @param {boolean} isPadSpeakerRoute
 */
export function addLineToConversation(speakerNumber: number, context: string, subtitle: string, listenerNumber: number, volumeType: number, isRandom: boolean = false, interruptible: boolean = true, ducksRadio: boolean = true, ducksScore: boolean = false, audibility: EEAudibility | number = 0, headset: boolean = false, dontInterruptForSpecialAbility: boolean = false, isPadSpeakerRoute: boolean = false): void {
	const addLineToConversation_result = Citizen.invokeNative<void>('0xC401B1960D35A6C4', speakerNumber, context, subtitle, listenerNumber, volumeType, isRandom, interruptible, ducksRadio, ducksScore, audibility, headset, dontInterruptForSpecialAbility, isPadSpeakerRoute);
	return addLineToConversation_result;
}