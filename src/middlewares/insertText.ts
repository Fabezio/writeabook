type Fonts = {
	bold: boolean;
	underline: boolean;
	italic: boolean;
};
export interface Text {
	textType: string;
	content: string;
	fonts: Fonts;
}
