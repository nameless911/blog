// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'namb0x.log';
export const SITE_DESCRIPTION = 'つくったもの、やったこと、行ったとこ、やらかしたこと。';

// Blog categories: the label used in each post's frontmatter -> the URL slug
export const CATEGORIES = {
	つくったもの: 'made',
	やったこと: 'did',
	いったとこ: 'went',
	やらかしたこと: 'oops',
} as const;

export type Category = keyof typeof CATEGORIES;
