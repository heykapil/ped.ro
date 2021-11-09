import { rehypeHighlightCode } from './lib/rehype-highlight-code';
import { rehypeMetaAttribute } from './lib/rehype-meta-attribute';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkSlug from 'remark-slug';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    draft: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (_) => _._raw.flattenedPath },
    readingTime: {
      type: 'json',
      resolve: (_) => readingTime(_.body.raw, { wordsPerMinute: 300 }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [rehypeMetaAttribute, rehypeHighlightCode],
  },
});
