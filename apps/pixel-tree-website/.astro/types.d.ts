declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"primer-post.md": {
  id: "primer-post.md",
  slug: "primer-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post copy 2.md": {
  id: "segundo-post copy 2.md",
  slug: "segundo-post-copy-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post copy 3.md": {
  id: "segundo-post copy 3.md",
  slug: "segundo-post-copy-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post copy 4.md": {
  id: "segundo-post copy 4.md",
  slug: "segundo-post-copy-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post copy 5.md": {
  id: "segundo-post copy 5.md",
  slug: "segundo-post-copy-5",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post copy.md": {
  id: "segundo-post copy.md",
  slug: "segundo-post-copy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"segundo-post.md": {
  id: "segundo-post.md",
  slug: "segundo-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
