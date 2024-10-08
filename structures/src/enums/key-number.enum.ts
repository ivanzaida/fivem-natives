export enum EKeyNumber {
	KeyBack = 8, // this was chosen to match Windows virtual key layout layout the KEY_ values are system-independent
	KeyTab, // 0x09,
	KeyClear = 12, // 0x0C,
	KeyReturn, // 0x0D,
	KeyPause = 19, // 0x13,
	KeyCapital, // 0x14,
	KeyKana, // 0x15,
	KeyJunja = 23, // 0x17,
	KeyFinal, // 0x18,
	KeyKanji, // 0x19,
	KeyEscape = 27, // 0x1B,
	KeyConvert, // 0x1C,
	KeyNoconvert, // 0x1D,
	KeyAccept, // 0x1E,
	KeyModechange, // 0x1F,
	KeySpace, // 0x20,
	KeyPageup, // 0x21,
	KeyPrior = 33, // 0x21,
	KeyPagedown, // 0x22,
	KeyNext = 34, // 0x22,
	KeyEnd, // 0x23,
	KeyHome, // 0x24,
	KeyLeft, // 0x25,
	KeyUp, // 0x26,
	KeyRight, // 0x27,
	KeyDown, // 0x28,
	KeySelect, // 0x29,
	KeyPrint, // 0x2A,
	KeySysrq = 19, // 0x2A,
	KeyExe = 43, // 0x2B,
	KeySnapshot, // 0x2C,
	KeyInsert, // 0x2D,
	KeyDelete, // 0x2E,
	KeyHelp, // 0x2F,
	Key_0, // 0x30,
	Key_1, // 0x31,
	Key_2, // 0x32,
	Key_3, // 0x33,
	Key_4, // 0x34,
	Key_5, // 0x35,
	Key_6, // 0x36,
	Key_7, // 0x37,
	Key_8, // 0x38,
	Key_9, // 0x39,
	KeyA = 65, // 0x41,
	KeyB, // 0x42,
	KeyC, // 0x43,
	KeyD, // 0x44,
	KeyE, // 0x45,
	KeyF, // 0x46,
	KeyG, // 0x47,
	KeyH, // 0x48,
	KeyI, // 0x49,
	KeyJ, // 0x4A,
	KeyK, // 0x4B,
	KeyL, // 0x4C,
	KeyM, // 0x4D,
	KeyN, // 0x4E,
	KeyO, // 0x4F,
	KeyP, // 0x50,
	KeyQ, // 0x51,
	KeyR, // 0x52,
	KeyS, // 0x53,
	KeyT, // 0x54,
	KeyU, // 0x55,
	KeyV, // 0x56,
	KeyW, // 0x57,
	KeyX, // 0x58,
	KeyY, // 0x59,
	KeyZ, // 0x5A,
	KeyLwin, // 0x5B,
	KeyRwin, // 0x5C,
	KeyApps, // 0x5D,
	KeySleep = 95, // 0x5F,
	KeyNumpad0, // 0x60,
	KeyNumpad1, // 0x61,
	KeyNumpad2, // 0x62,
	KeyNumpad3, // 0x63,
	KeyNumpad4, // 0x64,
	KeyNumpad5, // 0x65,
	KeyNumpad6, // 0x66,
	KeyNumpad7, // 0x67,
	KeyNumpad8, // 0x68,
	KeyNumpad9, // 0x69,
	KeyMultiply, // 0x6A,
	KeyAdd, // 0x6B,
	KeySeparator, // 0x6C,
	KeySubtract, // 0x6D,
	KeyDecimal, // 0x6E,
	KeyDivide, // 0x6F,
	KeyF1, // 0x70,
	KeyF2, // 0x71,
	KeyF3, // 0x72,
	KeyF4, // 0x73,
	KeyF5, // 0x74,
	KeyF6, // 0x75,
	KeyF7, // 0x76,
	KeyF8, // 0x77,
	KeyF9, // 0x78,
	KeyF10, // 0x79,
	KeyF11, // 0x7A,
	KeyF12, // 0x7B,
	KeyF13, // 0x7C,
	KeyF14, // 0x7D,
	KeyF15, // 0x7E,
	KeyF16, // 0x7F,
	KeyF17, // 0x80,
	KeyF18, // 0x81,
	KeyF19, // 0x82,
	KeyF20, // 0x83,
	KeyF21, // 0x84,
	KeyF22, // 0x85,
	KeyF23, // 0x86,
	KeyF24, // 0x87,
	KeyNumlock = 144, // 0x90,
	KeyScroll, // 0x91,
	KeyNumpadequals, // 0x92,
	KeyFjJisho = 146, // 0x92,
	KeyFjMasshou, // 0x93,
	KeyFjTouroku, // 0x94,
	KeyFjLoya, // 0x95,
	KeyFjRoya, // 0x96,
	KeyLshift = 160, // 0xA0,
	KeyRshift, // 0xA1,
	KeyLcontrol, // 0xA2,
	KeyRcontrol, // 0xA3,
	KeyLmenu, // 0xA4,
	KeyRmenu, // 0xA5,
	KeyWebback, // 0xA6,
	KeyWebforward, // 0xA7,
	KeyWebrefresh, // 0xA8,
	KeyWebstop, // 0xA9,
	KeyWebsearch, // 0xAA,
	KeyWebfavorites, // 0xAB,
	KeyWebhome, // 0xAC,
	KeyMute, // 0xAD,
	KeyVolumedown, // 0xAE,
	KeyVolumeup, // 0xAF,
	KeyNexttrack, // 0xB0,
	KeyPrevtrack, // 0xB1,
	KeyMediastop, // 0xB2,
	KeyPlaypause, // 0xB3,
	KeyMail, // 0xB4,
	KeyMediaselect, // 0xB5,
	KeyLaunchapp1, // 0xB6,
	KeyLaunchapp2, // 0xB7,
	KeySemicolon = 186, // 0xBA,
	KeyOem_1 = 186, // 0xBA,
	KeyPlus, // 0xBB,
	KeyEquals = 187, // 0xBB,
	KeyComma, // 0xBC,
	KeyMinus, // 0xBD,
	KeyPeriod, // 0xBE,
	KeySlash, // 0xBF,
	KeyOem_2 = 191, // 0xBF,
	KeyTilde, // 0xC0,
	KeyOem_3 = 192, // 0xC0,
	KeyLbracket = 219, // 0xDB,
	KeyOem_4 = 219, // 0xDB,
	KeyBackslash, // 0xDC,
	KeyOem_5 = 220, // 0xDC,
	KeyRbracket, // 0xDD,
	KeyOem_6 = 221, // 0xDD,
	KeyApostrophe, // 0xDE,
	KeyOem_7 = 222, // 0xDE,
	KeyGrave, // 0xDF,
	KeyOem_8 = 223, // 0xDF,
	KeyAx = 225, // 0xE1,
	KeyOem_102, // 0xE2,
	KeyIcoHelp, // 0xE3,
	KeyIco_00, // 0xE4,
	KeyProcesskey, // 0xE5,
	KeyIcoClear, // 0xE6,
	KeyPacket, // 0xE7,
	KeyNumpadenter = 253, // 0xFD,
	KeyChatpadGreenShift, // 0xFE,
	KeyChatpadOrangeShift, // 0xFF,
}